import React from "react";
import styled, { css } from "styled-components";
import MainLayout from "../../components/MainLayout";
import PostListHeader from "./PostListHeader";

const PostList = () => {
  return (
    <MainLayout title='postList'>
      <Container>
        <Wrapper>
          <PostListHeader />
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
  overflow: hidden;

  ${({ theme }) =>
    css`
      background: linear-gradient(
        to bottom right,
        ${theme.colors.primaryLight},
        ${theme.colors.primary}
      );
    `}
`;

const Wrapper = styled.div`
  height: 80%;
  width: 80%;
  padding: 1.5rem 2rem;
  outline: 2px solid ${({ theme }) => theme.colors.grayLight1};
  outline-offset: 1.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
`;
