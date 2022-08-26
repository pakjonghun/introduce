import React from "react";
import styled, { css } from "styled-components";
import { baseGradient } from "../../styles/typography";
import Header from "./Header";
import Navigation from "./Navigation";
import PageTitle from "./PageTitle";

interface MainLayoutProps {
  title: string;
  children: React.ReactNode;
  isBack?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  isBack = false,
}) => {
  return (
    <Container>
      <PageTitle title={title} />
      <Navigation />
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  height: 100vh;
  padding: 2rem 3rem;
  ${({ theme }) => css`
    ${baseGradient(theme.colors.secondaryLight, theme.colors.secondary)}
  `}
`;

const Main = styled.main``;
