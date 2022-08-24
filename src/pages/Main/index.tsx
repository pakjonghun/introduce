import React from "react";
import styled from "styled-components";

const Main = () => {
  return <Conatiner>Main</Conatiner>;
};

export default Main;

const Conatiner = styled.div`
  background-color: ${({ theme }) => theme.colors.grayLight1};
`;
