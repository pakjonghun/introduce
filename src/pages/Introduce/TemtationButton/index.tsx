import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import useDelay from "../../../hooks/useDelaySetState";
import useGetPageSwitchFunc from "../../../hooks/useGetPageSwitchFunc";
import { scrollDirectionState } from "../../../recoil/Introduce/atom";
import { temptation } from "../../../styles/animation";
import { getSvgIcon } from "../../../styles/typography";

const TemtationButton = () => {
  const docEle = document.documentElement;
  const { scrollHeight, scrollTop, clientHeight } = docEle;
  const isBottom = scrollHeight === scrollTop + clientHeight;
  const onClick = useGetPageSwitchFunc();

  const scrollDirection = useRecoilValue(scrollDirectionState);
  const isButtonShow = useDelay({
    delay: 1000,
    state: scrollDirection === null,
    isNotDelay: scrollDirection !== null,
  });

  return <DownArrow onClick={onClick} isShow={!isBottom && isButtonShow} />;
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
