import React from "react";
import styled from "styled-components";
import useGetPageSwitchFunc from "../hooks/useGetPageSwitchFunc";
import { temptation } from "../../../styles/animation";
import { getSvgIcon } from "../../../styles/typography";
import useGetIsShowButton from "./useGetIsShowButton";

const TemtationButton = () => {
  const onClick = useGetPageSwitchFunc();
  const isButtonShow = useGetIsShowButton();
  return <DownArrow onClick={onClick} isShow={isButtonShow} />;
};

export default TemtationButton;

interface IsShowProp {
  isShow: boolean;
}

const DownArrow = styled.div<IsShowProp>`
  position: fixed;
  bottom: 5rem;
  left: 50%;
  visibility: ${({ isShow }) => (isShow ? "visible" : "hidden")};
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  animation: ${temptation} 3s infinite;
  transform: translateX(-50%);
  cursor: pointer;
  user-select: none;
  ${({ theme }) =>
    getSvgIcon({
      width: 2.5,
      height: 2.5,
      iconName: "arrow-down2",
      color: theme.colors.grayDark3,
    })};
`;
