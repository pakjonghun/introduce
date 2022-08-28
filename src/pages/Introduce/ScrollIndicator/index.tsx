import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  isSwitchingPageState,
  scrollTopState,
} from "../../../recoil/Introduce/atom";
import { leftFadeIn } from "../../../styles/animation";
import { baseMenuHover } from "../../../styles/typography";
import { PAGE_ONE_TITLE, PAGE_TWO_TITLE } from "../../../texture/constants";

const ScrollIndicator = () => {
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const scrollTop = useRecoilValue(scrollTopState);
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const clientHeight = document.documentElement.clientHeight;

  const [isSwitchingPage, setIsSwitchingPage] =
    useRecoilState(isSwitchingPageState);

  const onClickMenu = useCallback(
    (scrollTop: number) => {
      if (isSwitchingPage) return;
      setIsSwitchingPage(true);
      window.scrollTo(0, scrollTop);
    },
    [setIsSwitchingPage, isSwitchingPage]
  );

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
      <Wrapper top={scrollBarPosition} ref={wrapperRef}>
        <SectionTitle onClick={() => onClickMenu(0)}>Header</SectionTitle>
        <SectionTitle onClick={() => onClickMenu(clientHeight)}>
          {PAGE_ONE_TITLE}
        </SectionTitle>
        <SectionTitle onClick={() => onClickMenu(clientHeight * 2)}>
          {PAGE_TWO_TITLE}
        </SectionTitle>
      </Wrapper>
    </Container>
  );
};

export default ScrollIndicator;

interface ScrollBarPosition {
  top: number;
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 7rem;
  padding-top: 6.7rem;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  mix-blend-mode: multiply;
  z-index: 11;
  animation: ${leftFadeIn} 1.5s 1.5s backwards;

  &:hover ul::before {
    transform: scaleY(0);
  }
`;

const Wrapper = styled.ul<ScrollBarPosition>`
  position: relative;
  color: ${({ theme }) => theme.colors.grayDark3};
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    top: ${({ top }) => top}px;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.3;
    width: 100%;
    height: calc(100% / 3);
    z-index: 5;
    transition: 0.3s;
  }
`;

const SectionTitle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  writing-mode: vertical-lr;
  text-align: center;
  user-select: none;
  cursor: pointer;
  z-index: 6;
  transition: 0.1s;
  ${baseMenuHover}
  height:20rem;
`;
