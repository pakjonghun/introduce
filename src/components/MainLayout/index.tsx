import React from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { isSwitchingPageState } from "../../recoil/Introduce/atom";
import { baseGradient } from "../../styles/typography";
import Navigation from "./Navigation";
import PageTitle from "./PageTitle";

interface MainLayoutProps {
  title: string;
  children: React.ReactNode;
  canClickEle?: boolean;
  isBack?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  isBack = false,
}) => {
  const isSwitchingPage = useRecoilValue(isSwitchingPageState);

  return (
    <Container isSwitchingPage={isSwitchingPage}>
      <PageTitle title={title} />
      <Navigation />
      <Main>{children}</Main>
    </Container>
  );
};

export default MainLayout;

interface IsSwitchingPageProp {
  isSwitchingPage: boolean;
}

const Container = styled.div<IsSwitchingPageProp>`
  pointer-events: ${({ isSwitchingPage }) =>
    isSwitchingPage ? "none" : "auto"};
  ${({ theme }) => css`
    ${baseGradient(theme.colors.secondaryLight, theme.colors.secondary)}
  `}
`;

const Main = styled.main``;
