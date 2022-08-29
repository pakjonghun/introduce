import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Post } from "../../../interfaces/post";
import { PostListResponse } from "../../../interfaces/postList";
import {
  isSearchLoadingState,
  postListCountState,
} from "../../../recoil/postlist/atom";

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

  return <></>;
};

export default PostList;
