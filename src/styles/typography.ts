import { media } from "./media";
import { css } from "styled-components";
import { getSvgPath } from "../utils/styleFunctions";
import {
  ColorChangeHover,
  GetSvgIconProps,
  TextInputWithIcon,
} from "./interfaces";

export const baseMenuHover = css`
  &:hover {
    color: ${({ theme }) => theme.colors.grayDark3};
    text-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    color: ${({ theme }) => theme.colors.grayDark1};
  }
`;

export const baseBoxHover = css`
  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: translateY(-0.2rem);
    box-shadow: ${({ theme }) => theme.shadows.light};
  }
`;

export const baseGradient = (leftColor: string, rightColor: string) => {
  return css`
    background-image: linear-gradient(
      to right bottom,
      ${leftColor},
      ${rightColor}
    );
  `;
};

export const getSvgIcon = ({
  width,
  height,
  iconName,
  color,
}: GetSvgIconProps) => {
  return css`
    width: ${width}rem;
    height: ${height}rem;
    background-image: url(${getSvgPath(iconName)});

    @supports (-webkit-mask-image: url()) or (mask-image: url()) {
      -webkit-mask-image: url(${getSvgPath(iconName)});
      -webkit-mask-size: cover;
      background-color: ${color};
      background-image: none;
    }
  `;
};

export const baseTextInput = ({ color, focusColor }: TextInputWithIcon) => css`
  border: 1px solid ${color};
  outline: 1px solid transparent;
  border-radius: ${({ theme }) => theme.values.baseRadius};
  transition: 0.2s;

  &:focus {
    border-color: ${focusColor};
    outline: 1px solid ${focusColor};
    box-shadow: ${({ theme }) => theme.shadows.light};
  }

  &::-webkit-input-placeholder {
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: ${color};
  }
`;

export const buttonHover = ({
  initColor,

  initBgColor,
}: ColorChangeHover) => {
  return css`
    color: ${initColor};
    background-color: ${initBgColor};
    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.medium};
      transform: translateY(-3px);
    }

    &:active {
      box-shadow: ${({ theme }) => theme.shadows.light};
      transform: translateY(-1px);
    }
  `;
};

export const baseEnterButton = css`
  position: relative;
  padding: 0 0 0 0;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 1px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayDark3};
  color: ${({ theme }) => theme.colors.grayDark3};
  background-color: transparent;
  transition: 0.2s;
  cursor: pointer;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130%;
    height: 150%;
    border-radius: 0.3rem;
    transition: 0.2s;
    z-index: -1;
  }

  &:hover::before {
    background-color: black;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.grayLight1};
    ${baseBoxHover}
  }

  ${media.sm} {
    font-size: 2.4rem;
  }
`;
