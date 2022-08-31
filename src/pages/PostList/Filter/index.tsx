import React from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { isFilterOpenState } from "../../../recoil/postlist/atom";
import { media } from "../../../styles/media";
import FilterHeader from "./FilterHeader";
import { IsFilterOpen } from "./interfaces";
import SortFilter from "./SortFilter";
import TagFilter from "./TagFilter";

const Filter = () => {
  const isFilterOpen = useRecoilValue(isFilterOpenState);

  return (
    <Container isFilterOpen={isFilterOpen}>
      <FilterHeader />
      <SortFilter />
      <TagFilter />
    </Container>
  );
};

export default Filter;

const Container = styled.div<IsFilterOpen>`
  position: sticky;
  top: 8rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 70rem;
  padding: 0 2rem 1rem 2rem;
  margin-left: auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.grayLight1};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  overflow-y: auto;
  z-index: 20;
  transition: 0.3s 0.2s;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${({ isFilterOpen }) => css`
    transform: translateX(${isFilterOpen ? "0" : "150rem"});
  `}

  ${media.xl} {
    width: 29rem;
  }

  ${media.lg} {
    width: 27rem;
  }

  ${media.md} {
    width: 25rem;
  }

  ${media.sm} {
    position: fixed;
    right: 50%;
    top: 50%;
    width: 70rem;
    height: auto;
    padding: 0 0 2rem 0;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translate(50%, -50%);
    visibility: ${({ isFilterOpen }) => (isFilterOpen ? "visible" : "hidden")};
    opacity: ${({ isFilterOpen }) => (isFilterOpen ? 1 : 0)};
  }
`;
