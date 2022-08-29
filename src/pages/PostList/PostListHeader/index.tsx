import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import useGetCountingNumber from "../../../hooks/useGetCountingNumber";
import {
  isSearchingState,
  isSearchLoadingState,
  postListCountState,
  searchTermState,
} from "../../../recoil/postlist/atom";
import { useRecoilValueLoadable } from "recoil";
import { getPostListsQuery } from "../../../recoil/postlist/selector";
import { getSvgIcon } from "../../../styles/typography";
import { spinAndScale } from "../../../styles/animation";

const PostListHeader = () => {
  const searchPostCount = useRecoilValue(postListCountState);
  const isSearchLoading = useRecoilValue(isSearchLoadingState);
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  const [isSearching, setS] = useRecoilState(isSearchingState);
  const resultCount = useGetCountingNumber({
    endNumber: searchPostCount,
    duration: 3000,
    startNumber: 0,
    isAniStart: isSearching,
  });

  const onSearchInputChange = useCallback(
    (value: string) => {
      setSearchTerm(value);
    },
    [setSearchTerm]
  );

  return (
    <Container>
      <OriginTitle isSearching={isSearching}>Today I Learn</OriginTitle>
      <SearchingTitle isSearching={isSearching}>
        {resultCount} Posts Found
        <LoadingSpinner isLoading={isSearchLoading}>loading</LoadingSpinner>
      </SearchingTitle>

      <SearchGroup>
        <SearchIcon />
        <SearchInput
          onChange={(event) => onSearchInputChange(event.target.value)}
          placeholder='Search'
        />
      </SearchGroup>
      <button
        onClick={() => setS((pre) => !pre)}
        style={{ transform: "translateY(10rem)" }}
      >
        click
      </button>
    </Container>
  );
};

export default PostListHeader;

interface IsSearching {
  isSearching: boolean;
}

interface IsLoading {
  isLoading: boolean;
}

const Container = styled.header`
  position: relative;
  display: flex;
`;

const CommonTitle = styled.h2<IsSearching>`
  position: absolute;
  left: 0rem;
  top: 0rem;
  display: inline-block;
  letter-spacing: 1px;
  transition: 0.3s;
  @supports (-webkit-background-clip: text) {
    -webkit-background-clip: text;
    color: transparent;
  }

  ${({ theme }) =>
    css`
      background: linear-gradient(
        to bottom right,
        ${theme.colors.secondary},
        ${theme.colors.primary}
      );
    `}
`;

const OriginTitle = styled(CommonTitle)`
  ${({ isSearching }) => css`
    transform: translateX(${isSearching ? "-50rem" : "0"});
  `}
`;

const SearchingTitle = styled(CommonTitle)`
  display: flex;
  align-items: center;
  ${({ isSearching }) => css`
    transform: translateX(${isSearching ? "0" : "-50rem"});
  `}
`;

const LoadingSpinner = styled.div<IsLoading>`
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  margin-left: 2rem;
  animation: ${spinAndScale} 4s linear infinite forwards;
  ${({ theme }) =>
    getSvgIcon({
      width: 2,
      height: 2,
      iconName: "spinner3",
      color: theme.colors.primary,
    })}
`;

const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SearchIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: -3rem;
  z-index: 10;

  ${({ theme }) =>
    getSvgIcon({
      color: theme.colors.grayLight4,
      width: 2,
      height: 2,
      iconName: "search",
    })}
`;

const SearchInput = styled.input`
  padding: 1rem 2rem 1rem 4rem;
  background-color: ${({ theme }) => theme.colors.grayLight1};
  border: 1px solid ${({ theme }) => theme.colors.grayLight4};
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transition: 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.grayDark1};
  }

  &::-webkit-input-placeholder {
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.grayLight4};
  }
`;
