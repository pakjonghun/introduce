import React from "react";
import styled from "styled-components";
import useGetPageSwitchFunc from "../hooks/useGetPageSwitchFunc";
import { temptation } from "../../../styles/animation";
import { getSvgIcon } from "../../../styles/typography";
import useGetIsShowButton from "./useGetIsShowButton";
import { getCurPageWhenNotScrolling } from "../../../utils/scrollFunctions";
import { useRecoilValue } from "recoil";
import { scrollTopState } from "../../../recoil/Introduce/atom";

const TemtationButton = () => {
  const onClick = useGetPageSwitchFunc();
  const isButtonShow = useGetIsShowButton();
  const scrollTop = useRecoilValue(scrollTopState);
  const curPage = getCurPageWhenNotScrolling(
    scrollTop,
    document.documentElement.clientHeight
  );

  return (
    <DownArrow
      isDarkMode={curPage === 3}
      onClick={onClick}
      isShow={isButtonShow}
    />
  );
};

export default TemtationButton;

interface DownArrowProps {
  isShow: boolean;
  isDarkMode?: boolean;
}

const DownArrow = styled.div<DownArrowProps>`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  visibility: ${({ isShow }) => (isShow ? "visible" : "hidden")};
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  animation: ${temptation} 3s infinite;
  transform: translateX(-50%);
  cursor: pointer;
  user-select: none;
  ${({ theme, isDarkMode }) =>
    getSvgIcon({
      width: 2.5,
      height: 2.5,
      iconName: "arrow-down2",
      color: isDarkMode ? theme.colors.grayDark1 : theme.colors.grayDark3,
    })};
`;
