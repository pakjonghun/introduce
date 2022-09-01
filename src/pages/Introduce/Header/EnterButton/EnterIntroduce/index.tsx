import React from "react";
import styled from "styled-components";
import { INTRODUCE_TEXT } from "../../../../../constant/constants";
import { baseEnterButton } from "../../../../../styles/typography";
import useGetPageSwitchFunc from "../../../hooks/useGetPageSwitchFunc";

const EnterIntroduce = () => {
  const onIntroduceClick = useGetPageSwitchFunc();
  return <Container onClick={onIntroduceClick}>{INTRODUCE_TEXT}</Container>;
};

export default EnterIntroduce;

const Container = styled.button`
  ${baseEnterButton}
`;
