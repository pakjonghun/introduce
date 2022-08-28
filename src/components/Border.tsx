import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../styles/theme";

interface BorderProps {
  height: string;
  distance: string;
  isAniStart: boolean;
  width?: string;
  color?: string;
}

const Border: React.FC<BorderProps> = ({
  width = "100%",
  color = theme.colors.grayLight4,
  distance,
  ...props
}) => {
  return (
    <Container
      distance={distance}
      width={width}
      color={color}
      {...props}
    ></Container>
  );
};

export default Border;

const Container = styled.div<BorderProps>`
  ${({ distance, height, width, color, isAniStart }) => css`
    margin: ${distance} 0;
    width: ${width === "100%" ? width : width};
    height: ${height};
    background-color: ${color};
    transform: scaleX(${isAniStart ? 1 : 0});
    transform-origin: left;
    transition: 3s;
  `}
`;
