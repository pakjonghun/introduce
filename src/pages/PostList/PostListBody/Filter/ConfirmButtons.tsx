import React from "react";
import styled, { css } from "styled-components";
import { buttonHover } from "../../../../styles/typography";

const ConfirmButtons = () => {
  return (
    <Container>
      <CancelButton>취소</CancelButton>
      <SaveButton>적용</SaveButton>
    </Container>
  );
};

export default ConfirmButtons;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  width: 100%;
`;

const CommonButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: ${({ theme }) => theme.values.baseRadius};
  box-shadow: ${({ theme }) => theme.shadows.light};
  font-weight: 700;
  transition: 0.2s;
`;

const CancelButton = styled(CommonButton)`
  ${({ theme }) => {
    const initColor = theme.colors.primary;
    const changeColor = theme.colors.grayLight1;
    const initBgColor = theme.colors.grayLight3;
    const changeBgColor = theme.colors.primary;
    return css`
      ${buttonHover({
        initColor,
        initBgColor,
        changeColor,
        changeBgColor,
      })};
    `;
  }}
`;

const SaveButton = styled(CommonButton)`
  ${({ theme }) => {
    const initColor = theme.colors.grayLight1;
    const changeColor = theme.colors.primary;
    const initBgColor = theme.colors.primary;
    const changeBgColor = theme.colors.grayLight3;
    return css`
      ${buttonHover({
        initColor,
        initBgColor,
        changeColor,
        changeBgColor,
      })};
    `;
  }}
`;
