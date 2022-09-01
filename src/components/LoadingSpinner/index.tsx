import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { isSearchLoadingState } from "../../recoil/postlist/atom";
import { spinAndScale } from "../../styles/animation";
import { getSvgIcon } from "../../styles/typography";
import { IsLoading } from "./interface";

const LoadingSpinner = () => {
  const isSearchLoading = useRecoilValue(isSearchLoadingState);
  return <Container isLoading={isSearchLoading}>loading</Container>;
};

export default LoadingSpinner;

const Container = styled.div<IsLoading>`
  position: absolute;
  right: 3rem;
  top: 50%;
  transform: translateY(-50%);
  visibility: ${({ isLoading }) => (isLoading ? "visible" : "hidden")};
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  margin-left: 2rem;
  animation: ${spinAndScale} 4s linear infinite;
  ${({ theme }) =>
    getSvgIcon({
      width: 2,
      height: 2,
      iconName: "spinner3",
      color: theme.colors.primary,
    })}
`;
