import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { isSortOpenState, sortState } from "../../../../recoil/postlist/atom";
import { media } from "../../../../styles/media";
import { getSvgIcon } from "../../../../styles/typography";
import { IsSortOpen } from "./interfaces";
import OptionList from "./OptionList";
import { toHangle } from "./utils";

const SortFilter = () => {
  const [key, value] = useRecoilValue(sortState);
  const [isSortOpen, setIsSortOpen] = useRecoilState(isSortOpenState);

  const selectedValue = key
    ? `${key.toUpperCase()} / ${toHangle(value)}`
    : "None";

  const onSelectClick = useCallback(() => {
    setIsSortOpen((pre) => !pre);
  }, [setIsSortOpen]);

  return (
    <Container>
      <Title>Sort</Title>
      <Selected isSortOpen={isSortOpen} onClick={onSelectClick}>
        {selectedValue}
        <DropIcon isSortOpen={isSortOpen} />
      </Selected>
      <OptionList />
    </Container>
  );
};

export default SortFilter;

const Container = styled.div`
  position: relative;
  padding: 0 2rem;
  font-size: 1.2rem;
  z-index: 10;
`;

const Title = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 0.5rem;
`;

const Selected = styled.div<IsSortOpen>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  transition: 0.2s;
  background-color: ${({ theme }) => theme.colors.grayLight1};

  ${({ theme, isSortOpen }) => {
    const radius = theme.values.baseRadius;
    if (isSortOpen) {
      return css`
        border-radius: ${radius} ${radius} 0 0;
      `;
    } else {
      return css`
        border-radius: ${radius};
      `;
    }
  }}

  &:hover {
    color: ${({ theme }) => theme.colors.grayLight1};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const DropIcon = styled.div<IsSortOpen>`
  transition: 0.2s;
  ${({ theme, isSortOpen }) =>
    getSvgIcon({
      width: 2,
      height: 2,
      iconName: isSortOpen ? "arrow_drop_up" : "arrow_drop_down",
      color: theme.colors.grayDark3,
    })}
`;
