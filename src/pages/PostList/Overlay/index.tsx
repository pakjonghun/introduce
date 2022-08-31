import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isFilterOpenState } from "../../../recoil/postlist/atom";
import { media } from "../../../styles/media";
import { IsOverlayOpen } from "./interface";

const Overlay = () => {
  const isFilterOpen = useRecoilValue(isFilterOpenState);
  return <OverLay isOverlayOpen={isFilterOpen} />;
};

export default Overlay;

const OverLay = styled.div<IsOverlayOpen>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.02);
  z-index: 12;
  transition: 0.3s;

  @supports (-webkit-backdrop-filter: blur()) or (backdrop-filter: blur()) {
    backdrop-filter: blur(1px);
  }

  visibility: hidden;
  opacity: 0;

  ${media.sm} {
    visibility: ${({ isOverlayOpen }) =>
      isOverlayOpen ? "visible" : "hidden"};
    opacity: ${({ isOverlayOpen }) => (isOverlayOpen ? 1 : 0)};
  }
`;
