import { css } from "styled-components";
import { getSvgPath } from "../utils/styleFunctions";

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

interface GetSvgIconProps {
  width: number;
  height: number;
  iconName: string;
  color: string;
}

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

interface TextInputWithIcon {
  color: string;
  focusColor: string;
}

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

interface ColorChangeHover {
  initColor: string;
  changeColor: string;
  initBgColor: string;
  changeBgColor: string;
}

export const buttonHover = ({
  initColor,
  changeColor,
  initBgColor,
  changeBgColor,
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
