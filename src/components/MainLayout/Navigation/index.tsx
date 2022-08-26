import React from "react";
import styled, { css } from "styled-components";
import { baseGradient, baseMenuHover } from "../../../styles/typography";
import { INTRODUCE_TEXT, TIL_ENTER_TEXT } from "../texture/constants";

const Navigation = () => {
  return (
    <Container>
      <PageMark href='/'>whoami</PageMark>
      <RightMenuList>
        <Menu href='/posts'>{TIL_ENTER_TEXT}</Menu>
        <Menu href='/'>{INTRODUCE_TEXT}</Menu>
      </RightMenuList>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
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

const Menu = styled.a`
  display: inline-block;
  font-size: 1.4rem;
  transition: 0.2s;
  ${baseMenuHover}
`;
