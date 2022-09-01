import React from "react";
import styled from "styled-components";
import PostHeaderTitle from "./PostHeaderTitle";
import SearchInputGroup from "./SearchInputGroup";

const PostListHeader = () => {
  return (
    <Container>
      <PostHeaderTitle />
      <SearchInputGroup />
    </Container>
  );
};

export default PostListHeader;

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  z-index: 11;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight2};
`;
