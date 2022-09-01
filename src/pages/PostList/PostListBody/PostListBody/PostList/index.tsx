import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { PostListResponse } from "../../../../../interfaces/postList";
import {
  isSearchLoadingState,
  pageState,
  postListCountState,
} from "../../../../../recoil/postlist/atom";
import Post from "../../Post";
import { IsLastItem } from "./interface";
import useGetInfinityScroll from "./useGetInfinityScroll";
import Overlay from "../../../Overlay";
import { media } from "../../../../../styles/media";
import LoadingSpinner from "../../../../../components/LoadingSpinner";

interface PostListProps {
  postListResponse: PostListResponse;
  idx: number;
}

const PostList: React.FC<PostListProps> = ({ postListResponse, idx }) => {
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
      <Wrapper>
        {postListResponse.data?.map((post) => (
          <Post post={post} />
        ))}
      </Wrapper>
      <LoadingPost isLastItem={isCurLast} ref={isCurLast ? ref : null}>
        <LoadingSpinner />
      </LoadingPost>
    </>
  );
};

export default PostList;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  padding: 1rem;

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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  ${({ isLastItem }) =>
    css`
      transform: scale(${isLastItem ? 1 : 0});
    `}
`;
