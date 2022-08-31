import React from "react";
import styled from "styled-components";
import { Post } from "../../../../interfaces/post";
import { media } from "../../../../styles/media";
import VirtualizedItem from "../PostListBody/PostList/VirtualizeItem";
import PostCategory from "./PostCategory";

interface PostProps {
  post: Post;
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  return (
    <VirtualizedItem height={160} key={post.id}>
      <Container>
        <PostInfo>
          <Title>
            {post.id.replace(".md", "").split("-").pop()?.toUpperCase()}
          </Title>
          <Date>{post.head.date?.slice(0, 10)}</Date>
        </PostInfo>
        <Content>{post.body.slice(0, 400)}</Content>
        <PostCategory categoryList={post.head.category?.split(",") || []} />
      </Container>
    </VirtualizedItem>
  );
};
export default PostItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 34rem;
  height: 30rem;
  padding: 1.5rem;
  font-size: 1.3rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: translateY(-3px) scale(1);
    box-shadow: ${({ theme }) => theme.shadows.light};
  }

  ${media.xl} {
    width: 32rem;
  }

  ${media.lg} {
    width: auto;
  }
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Content = styled.div`
  position: relative;
  height: 16rem;
  margin: 1.5rem 0 1rem 0;
  padding: 1rem 1.2rem;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.grayLight3};
  color: ${({ theme }) => theme.colors.grayDark2};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  overflow-y: auto;
  z-index: 1;

  &::before {
    content: "\u201c";
    position: absolute;
    top: 0.4rem;
    left: -2rem;
    font-size: 30rem;
    color: ${({ theme }) => theme.colors.grayLight1};
    font-family: sans-serif;
    line-height: 1;
    z-index: -1;
  }
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grayDark2};
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.grayDark3};
`;
