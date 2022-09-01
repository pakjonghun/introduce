import React from "react";
import { Loadable } from "recoil";
import { PostListResponse } from "../../../../interfaces/postList";
import PostList from "./PostList";

interface PostListProps {
  loadablePostLists: Loadable<PostListResponse>;
  idx: number;
}

const PostListBody: React.FC<PostListProps> = ({ loadablePostLists, idx }) => {
  switch (loadablePostLists.state) {
    case "loading":
      return null;

    case "hasValue":
      return (
        <>
          <PostList idx={idx} postListResponse={loadablePostLists.contents} />
        </>
      );

    default:
      throw new Error("error on postListBody");
  }
};

export default PostListBody;
