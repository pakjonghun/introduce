import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { baseGradient, baseMenuHover } from "../../../styles/typography";
import useGetIsShowNav from "./useGetIsShowNav";
import MenuList from "./MenuList";
import { IsShowNav } from "./interface";

interface NavigationProp {
  canBack: boolean;
}

const Navigation: React.FC<NavigationProp> = ({ canBack }) => {
  const { pathname } = useLocation();
  const isShowNav = useGetIsShowNav();
  const nav = useNavigate();

  const onBackClick = useCallback(() => {
    nav(-1);
  }, [nav]);

  return (
    <Container isShowNav={pathname === "/posts" || isShowNav}>
      {canBack && <BackButton onClick={onBackClick}>&larr;</BackButton>}
      <PageMark href='/'>whoami</PageMark>
      <MenuList pathname={pathname} />
    </Container>
  );
};

export default Navigation;

const Container = styled.nav<IsShowNav>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 3rem 2rem 9rem;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  opacity: ${({ isShowNav }) => (isShowNav ? 1 : 0)};
  z-index: 10;
  transition: 0.2s;
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

const BackButton = styled.a`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  height: 100%;
  user-select: none;
  font-weight: 900;
  left: 3rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.grayDark3};
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    color: ${({ theme }) => theme.colors.grayDark1};
    transform: translateY(-50%) scale(1);
  }
`;
