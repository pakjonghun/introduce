import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { media } from "../../../styles/media";
import { baseGradient, baseMenuHover } from "../../../styles/typography";
import { INTRODUCE_TEXT, TIL_ENTER_TEXT } from "../../../texture/constants";
import useGetIsShowNav from "./useGetIsShowNav";

const Navigation = () => {
  const { pathname } = useLocation();
  const isShowNav = useGetIsShowNav();

  return (
    <Container isShowNav={pathname === "/posts" || isShowNav}>
      <PageMark href='/'>whoami</PageMark>
      <RightMenuList>
        <Menu isSelected={pathname === "/posts"} href='/posts'>
          {TIL_ENTER_TEXT}
        </Menu>
        <Menu isSelected={pathname === "/"} href='/'>
          {INTRODUCE_TEXT}
        </Menu>
      </RightMenuList>
    </Container>
  );
};

export default Navigation;

interface IsShowNav {
  isShowNav: boolean;
}

interface IsSelected {
  isSelected: boolean;
}

const Container = styled.nav<IsShowNav>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  max-width: 130rem;
  width: 100%;
  margin-left: 7rem;
  padding: 2rem 3rem 2rem 9rem;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  opacity: ${({ isShowNav }) => (isShowNav ? 1 : 0)};
  z-index: 10;
  transition: 0.2s;

  ${media.sm} {
    margin-left: 0;
  }
`;

const PageMark = styled.a`
  display: inline-block;
  font-weight: 700;
  text-transform: uppercase;
  color: transparent;
  letter-spacing: 1px;
  background-clip: text;
  -webkit-background-clip: text;
  cursor: pointer;
  transition: 0.2s;
  user-select: none;
  ${baseMenuHover}
  ${({ theme }) =>
    css`
      font-family: ${theme.fonts.primaryEnFont};
      ${baseGradient(theme.colors.grayLight4, theme.colors.grayDark3)}
    `}
`;

const RightMenuList = styled.div`
  & > *:not(:last-child) {
    margin-right: 3rem;
  }
`;

const Menu = styled.a<IsSelected>`
  position: relative;
  display: inline-block;
  font-size: 1.4rem;
  transition: 0.2s;
  ${baseMenuHover}
  ${({ isSelected, theme }) => css`
    color: ${isSelected ? theme.colors.grayDark3 : "currentColor"};
    font-weight: ${isSelected ? 700 : 400};

    &::after {
      content: "";
      opacity: ${isSelected ? 1 : 0};
      position: absolute;
      left: 50%;
      bottom: -1rem;
      transform: translateX(-50%);
      border-radius: 3rem;
      width: 0.5rem;
      height: 0.5rem;
      background-color: ${({ theme }) => theme.colors.grayDark3};
      transition: 0.2s;
    }
  `}
`;
