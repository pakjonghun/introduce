import React from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import useGetCountingNumber from "../../../../hooks/useGetCountingNumber";
import {
  isSearchLoadingState,
  postListCountState,
  searchTermState,
  selectedTagsState,
  sortState,
} from "../../../../recoil/postlist/atom";
import { media } from "../../../../styles/media";
import { IsSearching } from "../interfaces";

const PostHeaderTitle = () => {
  const searchPostCount = useRecoilValue(postListCountState);
  const isSearchLoading = useRecoilValue(isSearchLoadingState);
  const tag = useRecoilValue(selectedTagsState);
  const [key, value] = useRecoilValue(sortState);
  const searchTerm = useRecoilValue(searchTermState);

  const isSearching =
    Boolean(searchTerm) ||
    Boolean(tag.length) ||
    (Boolean(key) && Boolean(value));

  const resultCount = useGetCountingNumber({
    endNumber: searchPostCount,
    duration: 2000,
    startNumber: 0,
    isAniStart: !isSearchLoading,
  });

  return (
    <>
      <OriginTitle isSearching={isSearching}>Today I Learn</OriginTitle>
      <SearchingTitle isSearching={isSearching}>
        <Count>{resultCount}</Count> Posts Found
        <LoadingSpinner />
      </SearchingTitle>
    </>
  );
};

export default PostHeaderTitle;

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

  ${media.sm} {
    letter-spacing: 0;
  }
`;

const OriginTitle = styled(CommonTitle)`
  ${({ isSearching }) => css`
    transform: translate(${isSearching ? "-50rem,-50%" : "0,-50%"});
  `}
`;

const Count = styled.span`
  justify-self: right;
`;

const SearchingTitle = styled(CommonTitle)`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 1rem;
  width: 28rem;
  ${({ isSearching }) => css`
    transform: translate(${isSearching ? "0,-50%" : "-50rem,-50%"});
  `}
`;
