import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import {
  isSortOpenState,
  sortState,
} from "../../../../../recoil/postlist/atom";
import { getSvgIcon } from "../../../../../styles/typography";

const SortFilter = () => {
  const [sort, setSort] = useRecoilState(sortState);
  const [isSortOpen, setIsSortOpen] = useRecoilState(isSortOpenState);

  const onSelectClick = useCallback(() => {
    setIsSortOpen((pre) => !pre);
  }, [setIsSortOpen]);

  const onOptionItemClick = useCallback(
    (key: string) => {
      setSort((pre) => (pre[0] === key ? [pre[0], !pre[1]] : [key, true]));
      setIsSortOpen(false);
    },
    [setIsSortOpen, setSort]
  );

  return (
    <Container>
      <Title>Sort</Title>
      <Selected isSortOpen={isSortOpen} onClick={onSelectClick}>
        {sort[0] || "SELECTED NONE"}
        <DropIcon isSortOpen={isSortOpen} />
      </Selected>
      <Options isSortOpen={isSortOpen}>
        <Item onClick={() => onOptionItemClick("1")}>1</Item>
        <Item onClick={() => onOptionItemClick("2")}>2</Item>
      </Options>
    </Container>
  );
};

export default SortFilter;

interface IsSortOpen {
  isSortOpen: boolean;
}

const Container = styled.div`
  position: relative;
  height: 100%;
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

const Options = styled.ul<IsSortOpen>`
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

const Item = styled.li`
  padding: 0.7rem 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.grayLight1};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;
