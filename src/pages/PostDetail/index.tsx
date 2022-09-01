import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import MainLayout from "../../components/MainLayout";
import { getPostDetailQuery } from "../../recoil/postDetail/selector";
import Loading from "./Loading";
import PostDetailBody from "./PostDetailBody";

const PostDetail = () => {
  const { id } = useParams();

  const post = useRecoilValueLoadable(getPostDetailQuery(id as string));

  switch (post.state) {
    case "loading":
      return <Loading />;
    case "hasValue": {
      return (
        <MainLayout title='PostDetail'>
          <PostDetailBody post={post.contents} />
        </MainLayout>
      );
    }
    default:
      throw new Error("error on postDetail");
  }
};

export default PostDetail;
