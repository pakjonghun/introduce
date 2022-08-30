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
import { baseTextInput, getSvgIcon } from "../../../styles/typography";
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
        <SearchInput
          value={searchTerm}
          onChange={(event) => onSearchInputChange(event.target.value)}
          placeholder='Search'
        />
        <SearchIcon />
      </SearchGroup>
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
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  z-index: 11;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight2};
`;

const CommonTitle = styled.h2<IsSearching>`
  position: absolute;
  left: 2rem;
  top: 50%;
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
    transform: translate(${isSearching ? "-50rem,-50%" : "0,-50%"});
  `}
`;

const SearchingTitle = styled(CommonTitle)`
  display: flex;
  align-items: center;
  ${({ isSearching }) => css`
    transform: translate(${isSearching ? "0,-50%" : "-50rem,-50%"});
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
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  z-index: 10;
  color: ${({ theme }) => theme.colors.secondary};
  transition: 0.2s;

  ${getSvgIcon({
    color: "currentColor",
    width: 2,
    height: 2,
    iconName: "search",
  })}
`;

const SearchInput = styled.input`
  width: 24rem;
  padding: 1rem 2rem 1rem 4rem;

  ${({ theme }) =>
    baseTextInput({
      color: theme.colors.secondary,
      focusColor: theme.colors.primary,
    })}

  &:focus + span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
