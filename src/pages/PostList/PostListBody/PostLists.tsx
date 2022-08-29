import React from "react";
import { Loadable } from "recoil";
import PostList from "./PostList";
import { PostListResponse } from "../../../interfaces/postList";
import LoadingSpinner from "../../../components/LoadingSpinner";

interface PostListProps {
  loadablePostLists: Loadable<PostListResponse>;
}

const PostLists: React.FC<PostListProps> = ({ loadablePostLists }) => {
  switch (loadablePostLists.state) {
    case "loading":
      return <LoadingSpinner />;

    case "hasValue":
      return (
        <>
          <PostList postListResponse={loadablePostLists.contents} />
        </>
      );

    default:
      throw new Error("error on postListBody");
  }
};

export default PostLists;
