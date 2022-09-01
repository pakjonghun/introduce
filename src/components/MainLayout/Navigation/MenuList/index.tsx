import React from "react";
import styled, { css } from "styled-components";
import { INTRODUCE_TEXT, TIL_ENTER_TEXT } from "../../../../constant/constants";
import { baseMenuHover } from "../../../../styles/typography";
import { IsSelected } from "../interface";

interface MenuListProp {
  pathname: string;
}

const MenuList: React.FC<MenuListProp> = ({ pathname }) => {
  return (
    <RightMenuList>
      <Menu isSelected={pathname === "/posts"} href='/posts'>
        {TIL_ENTER_TEXT}
      </Menu>
      <Menu isSelected={pathname === "/"} href='/'>
        {INTRODUCE_TEXT}
      </Menu>
    </RightMenuList>
  );
};

export default MenuList;

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
