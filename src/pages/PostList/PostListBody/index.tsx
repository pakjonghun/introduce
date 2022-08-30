import React from "react";
import { useRecoilValueLoadable } from "recoil";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { getPostListsQuery } from "../../../recoil/postlist/selector";
import PostLists from "./PostLists";

const PostListBody = () => {
  const postLists = useRecoilValueLoadable(getPostListsQuery);

  switch (postLists.state) {
    case "loading":
      return <LoadingSpinner />;

    case "hasValue":
      return (
        <>
          {postLists.contents.map((loadablePostLists, idx) => (
            <PostLists key={idx} loadablePostLists={loadablePostLists} />
          ))}
        </>
      );

    default:
      throw new Error("error on postListBody");
  }
};

export default PostListBody;