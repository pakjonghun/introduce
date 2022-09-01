import React from "react";
import { useLocation } from "react-router-dom";
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
  canBack?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  canBack = false,
}) => {
  const { pathname } = useLocation();
  const isSwitchingPage = useRecoilValue(isSwitchingPageState);

  return (
    <Container
      isPostListPage={pathname === "/posts"}
      isSwitchingPage={isSwitchingPage}
    >
      <Wrapper>
        <PageTitle title={title} />
        <Navigation canBack={canBack} />
        <Main>{children}</Main>
      </Wrapper>
    </Container>
  );
};

export default MainLayout;

interface IsSwitchingPageProp {
  isSwitchingPage: boolean;
  isPostListPage: boolean;
}

const Container = styled.div<IsSwitchingPageProp>`
  width: 100%;
  pointer-events: ${({ isSwitchingPage }) =>
    isSwitchingPage ? "none" : "auto"};

  ${({ theme, isPostListPage }) => {
    if (isPostListPage) {
      return css`
        background: linear-gradient(
          to bottom right,
          ${theme.colors.primaryLight},
          ${theme.colors.primary}
        );
      `;
    } else {
      return css`
        ${baseGradient(theme.colors.secondaryLight, theme.colors.secondary)}
      `;
    }
  }}
`;

const Wrapper = styled.div`
  max-width: 130rem;
  margin: 0 auto;
`;

const Main = styled.main``;
