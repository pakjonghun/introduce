import React from "react";
import { Post } from "../../../interfaces/post";
import MarkdownIt from "markdown-it";
import styled from "styled-components";

interface PostDetailBodyProp {
  post: Post;
}

const PostDetailBody: React.FC<PostDetailBodyProp> = ({ post }) => {
  const md = new MarkdownIt();
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const body = md.render(post.body);
  return (
    <Container className='postDetail'>
      <Title>{post.id.replace(".md", "")}</Title>
      <div className='postDetail' dangerouslySetInnerHTML={{ __html: body }} />
    </Container>
  );
};

export default PostDetailBody;

const Container = styled.section`
  height: 100vh;
  padding: 6rem 2rem 3rem 2rem;
  color: ${({ theme }) => theme.colors.grayDark3};
  overflow-y: auto;
`;

const Title = styled.h1`
  margin-bottom: 3rem;
`;
