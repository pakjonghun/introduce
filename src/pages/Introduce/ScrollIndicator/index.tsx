import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { scrollTopState } from "../../../recoil/Introduce/atom";
import { PAGE_ONE_TITLE } from "../../../texture/constants";

const ScrollIndicator = () => {
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const scrollTop = useRecoilValue(scrollTopState);
  const [scrollBarPosition, setScrollBarPosition] = useState(0);

  useEffect(() => {
    if (wrapperRef.current) {
      const wrapperHeight = wrapperRef.current.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollProgress = scrollTop / scrollHeight;
      setScrollBarPosition(wrapperHeight * scrollProgress);
    }
  }, [scrollTop]);

  return (
    <Container>
      <Wrapper ref={wrapperRef}>
        <ScrollBar top={scrollBarPosition} />
        <SectionTitle>Header</SectionTitle>
        <SectionTitle>{PAGE_ONE_TITLE}</SectionTitle>
      </Wrapper>
    </Container>
  );
};

export default ScrollIndicator;

interface ScrollBarPosition {
  top: number;
}

const ScrollBar = styled.div<ScrollBarPosition>`
  position: absolute;
  top: ${({ top }) => top}px;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.3;
  width: 100%;
  height: calc(100% / 2);
`;

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 7rem;
  padding-top: 6.7rem;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  z-index: 11;
  mix-blend-mode: multiply;
`;

const Wrapper = styled.ul`
  position: relative;
  color: ${({ theme }) => theme.colors.grayDark3};
  text-transform: uppercase;
`;

const SectionTitle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  writing-mode: vertical-lr;
  text-align: center;
`;
