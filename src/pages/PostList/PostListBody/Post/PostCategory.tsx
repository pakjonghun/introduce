import React from "react";
import styled from "styled-components";

interface PostCategoryProps {
  categoryList: string[];
}

const PostCategory: React.FC<PostCategoryProps> = ({ categoryList }) => {
  return (
    <Container>
      {categoryList.map((category) => (
        <Category key={category}>{category.trim()}</Category>
      ))}
    </Container>
  );
};

export default PostCategory;

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1rem;
  color: ${({ theme }) => theme.colors.grayDark3};
  font-weight: 400;
  white-space: nowrap;

  &::before {
    content: "포함된 내용:";
    margin-right: 1rem;
  }
`;

const Category = styled.li`
  &::before {
    content: "#";
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;
