import React from "react";
import styled, { css } from "styled-components";
import MainLayout from "../../components/MainLayout";
import PostListBody from "./PostListBody";
import Filter from "./PostListBody/Filter";
import PostListHeader from "./PostListHeader";

const PostList = () => {
  return (
    <MainLayout title='postList'>
      <Container>
        <Wrapper>
          <PostListHeader />
          <Filter />
          <PostListBody />
        </Wrapper>
      </Container>
    </MainLayout>
  );
};

export default PostList;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 5rem;
  ${({ theme }) =>
    css`
      background: linear-gradient(
        to bottom right,
        ${theme.colors.primaryLight},
        ${theme.colors.primary}
      );
    `};
`;

const Wrapper = styled.div`
  position: relative;
  height: 80%;
  width: 80%;
  outline: 2px solid ${({ theme }) => theme.colors.grayLight1};
  outline-offset: 1.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  overflow: hidden;
`;
