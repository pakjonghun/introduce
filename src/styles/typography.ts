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
