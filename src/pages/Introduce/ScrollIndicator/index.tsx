import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { leftFadeIn } from "../../../styles/animation";
import { media } from "../../../styles/media";
import { PAGE_ONE_TITLE, PAGE_TWO_TITLE } from "../../../constant/constants";
import useGetOnMenuClickFunc from "./useGetOnMenuClickFunc";
import useSetIndicatorTop from "./useSetIndicatorTop";

const ScrollIndicator = () => {
  const [scrollBarPosition, setScrollBarPosition] = useState(0);
  const setPosition = useCallback((value: number) => {
    setScrollBarPosition(value);
  }, []);

  const wrapperRef = useSetIndicatorTop({ setFunc: setPosition });
  const clientHeight = document.documentElement.clientHeight;
  const onClickMenu = useGetOnMenuClickFunc();

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
        <SectionTitle onClick={() => onClickMenu(clientHeight * 3)}>
          footer
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
  animation: ${leftFadeIn} 1s 1s backwards;

  ${media.sm} {
    display: none;
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
    height: calc(100% / 4);
    z-index: 5;
    transition: 0.1s;
  }
`;

const SectionTitle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;
  padding-left: 0.2rem;
  writing-mode: vertical-lr;
  text-align: center;
  font-size: 1.4rem;
  user-select: none;
  cursor: pointer;
  z-index: 6;
  transition: 0.1s;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:active {
    opacity: 0.8;
  }
`;
