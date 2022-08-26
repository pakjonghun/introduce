import React from "react";
import styled from "styled-components";

const Headings = () => {
  return (
    <Heading>
      <HeadingSub>잘 정리해야 알아보기 쉽죠</HeadingSub>
      <HeadingTop>보기쉽게 정리하는 </HeadingTop>
      <HeadingMid>프론트앤드 개발자</HeadingMid>
      <HeadingBottom>박정훈 입니다</HeadingBottom>
    </Heading>
  );
};

export default Headings;

const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeadingSub = styled.span`
  position: relative;
  margin-left: 4rem;
  margin-bottom: 3rem;
  font-size: 1.3rem;
  letter-spacing: 1px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -3.5rem;
    transform: translateY(-50%);
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(to right, #000 0%, #000 50%, blue 50%);
  }
`;

const HeadingTop = styled.p``;
const HeadingMid = styled.p``;
const HeadingBottom = styled.p``;
