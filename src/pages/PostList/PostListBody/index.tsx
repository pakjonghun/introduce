import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import styled from "styled-components";
import { isFilterOpenState } from "../../../recoil/postlist/atom";
import { getPostListsQuery } from "../../../recoil/postlist/selector";
import { IsFilterOpen } from "../Filter/interfaces";
import PostList from "./PostListBody";

const PostListBody = () => {
  const postLists = useRecoilValueLoadable(getPostListsQuery);
  const isFilterOpen = useRecoilValue(isFilterOpenState);

  switch (postLists.state) {
    case "loading":
      return null;

    case "hasValue":
      return (
        <Container isFilterOpen={isFilterOpen}>
          {postLists.contents.map((loadablePostLists, idx) => (
            <PostList
              idx={idx}
              key={idx}
              loadablePostLists={loadablePostLists}
            />
          ))}
        </Container>
      );

    default:
      throw new Error("error on postListBody");
  }
};

export default PostListBody;

const Container = styled.div<IsFilterOpen>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ isFilterOpen }) => (isFilterOpen ? "68%" : "100%")};
  margin-top: 8rem;
  transition: 0.3s;
`;
