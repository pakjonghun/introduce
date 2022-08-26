import { css } from "styled-components";

export const baseMenuHover = css`
  &:hover {
    transform: scale(1.03);
    text-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: scale(1);
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
