import React from "react";
import styled from "styled-components";

interface PostInfoProps {
  title: string;
  date?: string;
}

const PostInfo: React.FC<PostInfoProps> = ({ title, date }) => {
  return (
    <Container>
      <Title>{title.replace(".md", "").split("-").pop()?.toUpperCase()}</Title>
      <Date>{date?.slice(0, 10)}</Date>
    </Container>
  );
};

export default PostInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grayDark2};
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.grayDark3};
`;
