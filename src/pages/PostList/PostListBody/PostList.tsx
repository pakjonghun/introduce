import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { PostListResponse } from "../../../interfaces/postList";
import {
  isSearchLoadingState,
  postListCountState,
} from "../../../recoil/postlist/atom";
import Post from "./Post";

interface PostListProps {
  postListResponse: PostListResponse;
}

const PostList: React.FC<PostListProps> = ({ postListResponse }) => {
  const setPostListCount = useSetRecoilState(postListCountState);
  const setIsSearchLoading = useSetRecoilState(isSearchLoadingState);

  useEffect(() => {
    setIsSearchLoading(false);
  }, [setIsSearchLoading]);

  useEffect(() => {
    setPostListCount(postListResponse.totalCount);
  }, [setPostListCount, postListResponse.totalCount]);

  return (
    <Container>
      {postListResponse.data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default PostList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 1rem;
  width: 73%;
  padding: 1rem 2rem;
  transition: 0.2s;
  overflow-y: auto;
  height: 100%;
`;
