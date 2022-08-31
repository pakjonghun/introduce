import React from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { isSortOpenState } from "../../../../../recoil/postlist/atom";
import { sortKeys } from "../constants";
import { IsSortOpen } from "../interfaces";
import OptionItem from "../OptionItem";

const SortItem = () => {
  const isSortOpen = useRecoilValue(isSortOpenState);

  return (
    <Container isSortOpen={isSortOpen}>
      <OptionItem sortItem='없음' />
      {sortKeys.map((key) => (
        <OptionItem sortItem={key} />
      ))}
    </Container>
  );
};

export default SortItem;

const Container = styled.ul<IsSortOpen>`
  position: absolute;
  bottom: 0;
  width: 100%;
  visibility: ${({ isSortOpen }) => (isSortOpen ? "visible" : "hidden")};
  transform: translateY(100%)
    scaleY(${({ isSortOpen }) => (isSortOpen ? 1 : 0)});
  transform-origin: top;
  background-color: ${({ theme }) => theme.colors.grayLight1};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-top: none;
  transition: 0.2s;
  ${({ theme, isSortOpen }) => {
    const radius = theme.values.baseRadius;

    if (isSortOpen) {
      return css`
        border-radius: 0 0 ${radius} ${radius};
      `;
    } else {
      return css`
        border-radius: ${radius};
      `;
    }
  }}
`;
