import React from "react";
import styled from "styled-components";
import { bottomFadeIn } from "../../../../styles/animation";
import { baseEnterButton } from "../../../../styles/typography";
import { TIL_ENTER_TEXT } from "../../../../constant/constants";
import { media } from "../../../../styles/media";
import EnterIntroduce from "./EnterIntroduce";

const EnterButtons = () => {
  return (
    <ButtonList>
      <EnterButton href='/posts'>{TIL_ENTER_TEXT}</EnterButton>
      <EnterIntroduce />
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
  ${baseEnterButton}
`;
