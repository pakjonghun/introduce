import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Post } from "../../../interfaces/post";
import { PostListResponse } from "../../../interfaces/postList";
import { postListCountState } from "../../../recoil/postlist/atom";

interface PostListProps {
  postListResponse: PostListResponse;
}

const PostList: React.FC<PostListProps> = ({ postListResponse }) => {
  console.log(postListResponse);
  const setPostListCount = useSetRecoilState(postListCountState);

  useEffect(() => {
    setPostListCount(postListResponse.totalCount);
  }, [postListResponse.totalCount]);

  return <></>;
};

export default PostList;
