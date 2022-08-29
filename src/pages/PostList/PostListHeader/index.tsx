import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import useGetCountingNumber from "../../../hooks/useGetCountingNumber";
import {
  isSearchingState,
  postListCountState,
} from "../../../recoil/postlist/atom";

const PostListHeader = () => {
  const searchPostCount = useRecoilValue(postListCountState);
  const [isSearching, setS] = useRecoilState(isSearchingState);
  const resultCount = useGetCountingNumber({
    endNumber: searchPostCount,
    duration: 3000,
    startNumber: 0,
    isAniStart: isSearching,
  });

  return (
    <Container>
      <SearchingTitle isSearching={isSearching}>
        {resultCount} Posts Found
      </SearchingTitle>
      <button
        onClick={() => setS((pre) => !pre)}
        style={{ transform: "translateY(10rem)" }}
      >
        click
      </button>
      <OriginTitle isSearching={isSearching}>Today I Learn</OriginTitle>
    </Container>
  );
};

export default PostListHeader;

interface IsSearching {
  isSearching: boolean;
}

const Container = styled.header`
  position: relative;
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
        ${theme.colors.grayLight4},
        ${theme.colors.grayDark3}
      );
    `}
`;

const OriginTitle = styled(CommonTitle)`
  ${({ isSearching }) => css`
    transform: translateX(${isSearching ? "-50rem" : "0"});
  `}
`;

const SearchingTitle = styled(CommonTitle)`
  ${({ isSearching }) => css`
    transform: translateX(${isSearching ? "0" : "-50rem"});
  `}
`;
