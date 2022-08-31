import React from "react";
import { useRecoilValueLoadable } from "recoil";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { getPostListsQuery } from "../../../recoil/postlist/selector";
import PostList from "./PostListBody";

const PostListBody = () => {
  const postLists = useRecoilValueLoadable(getPostListsQuery);

  switch (postLists.state) {
    case "loading":
      return <LoadingSpinner />;

    case "hasValue":
      return (
        <>
          {postLists.contents.map((loadablePostLists, idx) => (
            <PostList
              idx={idx}
              key={idx}
              loadablePostLists={loadablePostLists}
            />
          ))}
        </>
      );

    default:
      throw new Error("error on postListBody");
  }
};

export default PostListBody;
