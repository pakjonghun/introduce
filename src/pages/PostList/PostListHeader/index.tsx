import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchPostCountState } from "../../../recoil/postlist/atom";

const PostListHeader = () => {
  const searchPostCount = useRecoilValue(searchPostCountState);

  return (
    <Container>
      <OriginTitle>Today I Learn</OriginTitle>
      <SearchingTitle>{searchPostCount} Posts Found</SearchingTitle>
    </Container>
  );
};

export default PostListHeader;

const Container = styled.header``;

const CommonTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grayDark3};
`;

const OriginTitle = styled(CommonTitle)``;

const SearchingTitle = styled(CommonTitle)``;
