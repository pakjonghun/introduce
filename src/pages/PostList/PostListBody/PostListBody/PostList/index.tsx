import React, { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { PostListResponse } from "../../../../../interfaces/postList";
import {
  isFilterOpenState,
  isSearchLoadingState,
  pageState,
  postListCountState,
} from "../../../../../recoil/postlist/atom";
import Post from "../../Post";
import { IsFilterOpen, IsLastItem } from "./interface";
import useGetInfinityScroll from "./hook/useGetInfinityScroll";
import Overlay from "../../../Overlay";
import { media } from "../../../../../styles/media";

interface PostListProps {
  postListResponse: PostListResponse;
  idx: number;
}

const PostList: React.FC<PostListProps> = ({ postListResponse, idx }) => {
  const isFilterOpen = useRecoilValue(isFilterOpenState);
  const setPostListCount = useSetRecoilState(postListCountState);
  const [isSearchLoading, setIsSearchLoading] =
    useRecoilState(isSearchLoadingState);

  const listCount = useRecoilValue(postListCountState);
  const page = useRecoilValue(pageState);
  const isLastList = idx === Math.ceil(listCount / 12) - 1;
  const isCurLast = idx === page - 1;

  const ref = useGetInfinityScroll({
    isLast: isLastList,
  });

  useEffect(() => {
    if (isSearchLoading) setIsSearchLoading(false);
  }, [setIsSearchLoading, isSearchLoading]);

  useEffect(() => {
    setPostListCount((pre) =>
      pre !== postListResponse.totalCount
        ? postListResponse?.totalCount || 0
        : pre
    );
  }, [setPostListCount, postListResponse.totalCount]);

  return (
    <>
      <Overlay />
      <Container isFilterOpen={isFilterOpen}>
        {postListResponse.data?.map((post) => (
          <Post post={post} />
        ))}
      </Container>
      <LoadingPost isLastItem={isCurLast} ref={isCurLast ? ref : null}>
        loading
      </LoadingPost>
    </>
  );
};

export default PostList;

const Container = styled.div<IsFilterOpen>`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 8rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  width: ${({ isFilterOpen }) => (isFilterOpen ? "68%" : "100%")};
  padding: 1rem;
  transition: 0.2s;
  transition: 0.3s;

  ${media.lg} {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  }

  ${media.sm} {
    width: 100%;
  }

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.xs} {
    grid-template-columns: 1fr;
  }
`;

const LoadingPost = styled.div<IsLastItem>`
  color: white;
  font-size: 3rem;

  ${({ isLastItem }) =>
    css`
      background-color: ${isLastItem ? "green" : "blue"};
      transform: scale(${isLastItem ? 1 : 0});
    `}
`;
