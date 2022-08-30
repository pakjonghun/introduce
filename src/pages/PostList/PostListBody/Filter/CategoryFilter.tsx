import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import {
  categoryState,
  isCategoryOpenState,
} from "../../../../recoil/postlist/atom";
import { getSvgIcon } from "../../../../styles/typography";

const CategoryFilter = () => {
  const [isCategoryOpen, setIsCategoryOpen] =
    useRecoilState(isCategoryOpenState);
  const [category, setCategory] = useRecoilState(categoryState);

  const onSelectClick = useCallback(() => {
    setIsCategoryOpen((pre) => !pre);
  }, [setIsCategoryOpen]);

  const onOptionItemClick = useCallback(
    (value: string) => {
      setCategory(value);
      setIsCategoryOpen(false);
    },
    [setIsCategoryOpen, setCategory]
  );

  return (
    <Container>
      <Title>Category</Title>
      <Selected isFilterOpen={isCategoryOpen} onClick={onSelectClick}>
        {category || "SELECTED NONE"}
        <DropIcon isFilterOpen={isCategoryOpen} />
      </Selected>
      <Options isFilterOpen={isCategoryOpen}>
        <Item onClick={() => onOptionItemClick("1")}>1</Item>
        <Item onClick={() => onOptionItemClick("2")}>2</Item>
      </Options>
    </Container>
  );
};

export default CategoryFilter;

interface IsFilterOpen {
  isFilterOpen: boolean;
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

const Selected = styled.div<IsFilterOpen>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  transition: 0.2s;
  background-color: ${({ theme }) => theme.colors.grayLight1};

  ${({ theme, isFilterOpen }) => {
    const radius = theme.values.baseRadius;
    if (isFilterOpen) {
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

const DropIcon = styled.div<IsFilterOpen>`
  transition: 0.2s;
  ${({ theme, isFilterOpen }) =>
    getSvgIcon({
      width: 2,
      height: 2,
      iconName: isFilterOpen ? "arrow_drop_up" : "arrow_drop_down",
      color: theme.colors.grayDark3,
    })}
`;

const Options = styled.ul<IsFilterOpen>`
  position: absolute;
  bottom: 0;
  width: 100%;
  visibility: ${({ isFilterOpen }) => (isFilterOpen ? "visible" : "hidden")};
  transform: translateY(100%)
    scaleY(${({ isFilterOpen }) => (isFilterOpen ? 1 : 0)});
  transform-origin: top;
  background-color: ${({ theme }) => theme.colors.grayLight1};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-top: none;
  transition: 0.2s;
  ${({ theme, isFilterOpen }) => {
    const radius = theme.values.baseRadius;

    if (isFilterOpen) {
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
