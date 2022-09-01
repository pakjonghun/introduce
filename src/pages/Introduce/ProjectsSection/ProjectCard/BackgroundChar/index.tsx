import React from "react";
import styled, { css } from "styled-components";
import { fadeInAndRotateByAngle } from "../../../../../styles/animation";
import { PAGE_TWO_TITLE } from "../../../../../constant/constants";
import useGetIsCurPage from "../../../hooks/useGetIsCurPage";
import { CharProp } from "./interface";

interface BackgroundCharProp {
  projectNum: number;
}

const BackgroundChar: React.FC<BackgroundCharProp> = ({ projectNum }) => {
  const charList = PAGE_TWO_TITLE.replace(" ", "").slice(
    (projectNum - 1) * 2,
    projectNum * 2
  );

  const isCurPage = useGetIsCurPage(3);
  const isFooter = useGetIsCurPage(4);

  return (
    <>
      <LeftChar isAniShow={isCurPage || isFooter} projectNum={projectNum}>
        {charList[0].toUpperCase()}
      </LeftChar>
      <RightChar isAniShow={isCurPage || isFooter} projectNum={projectNum}>
        {charList[1].toUpperCase()}
      </RightChar>
    </>
  );
};

export default BackgroundChar;

const LeftChar = styled.span<CharProp>`
  position: absolute;
  ${({ projectNum, isAniShow }) => {
    let top = "";
    let left = "";
    if (projectNum === 1) {
      top = "-10rem";
      left = "-1rem";
    }

    if (projectNum === 2) {
      top = "-6rem";
      left = "-2rem";
    }

    if (projectNum === 3) {
      top = "-7rem";
      left = "-3rem";
    }

    if (isAniShow) {
      return css`
        top: ${top};
        left: ${left};
        animation: ${fadeInAndRotateByAngle("380deg")} 1s 1s linear backwards;
      `;
    } else {
      return css`
        top: ${top};
        left: ${left};
      `;
    }
  }}

  font-size: 7rem;
  transform: rotate(10deg);
  z-index: -1;
`;

const RightChar = styled.span<CharProp>`
  position: absolute;
  ${({ projectNum, isAniShow }) => {
    let bottom = "";
    let right = "";
    if (projectNum === 1) {
      bottom = "-3rem";
      right = "-2rem";
    }

    if (projectNum === 2) {
      bottom = "-9rem";
      right = "1rem";
    }

    if (projectNum === 3) {
      bottom = "-3rem";
      right = "-4rem";
    }

    if (isAniShow) {
      return css`
        bottom: ${bottom};
        right: ${right};
        animation: ${fadeInAndRotateByAngle("380deg")} 1s 1s linear backwards;
      `;
    } else {
      return css`
        bottom: ${bottom};
        right: ${right};
      `;
    }
  }}

  font-size: 7rem;
  transform: rotate(-20deg);
  z-index: -1;
`;
