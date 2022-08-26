import React from "react";
import styled from "styled-components";
import { leftFadeIn } from "../../../styles/animation";
import EnterButtons from "./EnterButtons";
import HeaderProfile from "./HeaderProfile";
import Headings from "./Headings";

const Header = () => {
  return (
    <Container>
      <Banner>
        <Headings />
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
  margin-top: 10rem;
`;

const Banner = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.grayDark3};
  letter-spacing: 3px;
  animation: ${leftFadeIn} 1.5s;
`;
