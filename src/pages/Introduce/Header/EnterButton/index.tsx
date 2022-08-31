import React from "react";
import styled from "styled-components";
import useGetPageSwitchFunc from "../../hooks/useGetPageSwitchFunc";
import { bottomFadeIn } from "../../../../styles/animation";
import { baseBoxHover } from "../../../../styles/typography";
import { INTRODUCE_TEXT, TIL_ENTER_TEXT } from "../../../../texture/constants";
import { media } from "../../../../styles/media";

const EnterButtons = () => {
  const onIntroduceClick = useGetPageSwitchFunc();
  return (
    <ButtonList>
      <EnterButton href='/posts'>{TIL_ENTER_TEXT}</EnterButton>
      <EnterIntroduce onClick={onIntroduceClick}>
        {INTRODUCE_TEXT}
      </EnterIntroduce>
    </ButtonList>
  );
};

export default EnterButtons;

const ButtonList = styled.div`
  display: flex;
  margin-top: 7rem;
  margin-left: 2rem;
  animation: ${bottomFadeIn} 1.5s 1s backwards;

  & > *:not(:last-child) {
    margin-right: 5rem;
  }

  ${media.sm} {
    margin-top: 8rem;
  }
`;

const EnterButton = styled.a`
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

const EnterIntroduce = styled(EnterButton)``;
