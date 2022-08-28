import React from "react";
import styled from "styled-components";
import { leftFadeIn } from "../../../styles/animation";
import EnterButtons from "./EnterButton";
import HeaderProfile from "./HeaderProfile";
import HeaderHeading from "./HeaderHeading";

const Header = () => {
  return (
    <Container>
      <Banner>
        <HeaderHeading />
        <EnterButtons />
      </Banner>
      <HeaderProfile />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: grid;
  grid-template-columns: 46rem 1fr;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 3rem 0 10rem;
`;

const Banner = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.grayDark3};
  letter-spacing: 3px;
  animation: ${leftFadeIn} 1.5s;
`;
