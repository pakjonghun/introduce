import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  isCategoryOpenState,
  isSortOpenState,
} from "../../../../recoil/postlist/atom";
import CategoryFilter from "./CategoryFilter";
import ConfirmButtons from "./ConfirmButtons";
import TagFilter from "./TagFilter";
import SortFilter from "./TagFilter/SortFilter";

const Filter = () => {
  const isCategoryOpen = useRecoilValue(isCategoryOpenState);
  const isSortOpen = useRecoilValue(isSortOpenState);

  return (
    <Container>
      <CancelButton>&times;</CancelButton>
      <OverLay isMenuOpen={isCategoryOpen || isSortOpen} />
      <Title>Filter</Title>
      <CategoryFilter />
      <TagFilter
        TagNameList={[
          "be",
          "asdf",
          "fg",
          "ert",
          "wngg",
          "gg",
          "be",
          "nn",
          "aa",
          "bb",
          "ee",
          "uuuuu",
        ]}
      />
      <SortFilter />
      <ConfirmButtons />
    </Container>
  );
};

export default Filter;

interface IsMenuOpen {
  isMenuOpen: boolean;
}

const Container = styled.div`
  position: absolute;
  top: 8rem;
  right: 2rem;
  width: 25rem;
  padding: 1rem 2rem;
  margin-left: auto;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.grayLight1};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.grayDark3};
`;

const OverLay = styled.div<IsMenuOpen>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 9;

  @supports (-webkit-backdrop-filter: blur()) or (backdrop-filter: blur()) {
    backdrop-filter: blur(1px);
  }

  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
`;

const CancelButton = styled.div`
  position: absolute;
  right: 1.2rem;
  top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: ${({ theme }) => theme.values.baseRadius};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.grayDark1};
  }

  &:active {
    transform: scale(1);
  }
`;
