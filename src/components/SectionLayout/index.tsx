import React from "react";
import styled, { css } from "styled-components";
import useGetIsCurPage from "../../pages/Introduce/hooks/useGetIsCurPage";
import useGetTypingText from "../../pages/Introduce/hooks/useGetTypingText";
import { media } from "../../styles/media";
import Border from "../Border";
import SectionTitle from "./SectionTitle";

interface SectionLayoutProps {
  page: number;
  title: string;
  children: React.ReactNode;
  isDarkMode?: boolean;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  page,
  title,
  children,
  isDarkMode = false,
}) => {
  const isCurPage = useGetIsCurPage(page);
  const titleText = useGetTypingText({
    title,
    interval: 200,
    isAniStart: isCurPage,
  });

  return (
    <Container isDarkMode={isDarkMode}>
      <SectionTitle isDarkMode={isDarkMode} title={titleText} />
      <SectionBorder isAniStart={isCurPage} distance='1rem' height='0.2rem' />
      {children}
    </Container>
  );
};

export default SectionLayout;

interface IsDarkModeProp {
  isDarkMode: boolean;
}

const Container = styled.section<IsDarkModeProp>`
  display: grid;
  grid-template-rows: min-content min-content 1fr;
  grid-row-gap: 3rem;
  margin-left: 7rem;
  padding: 8rem 3rem 2rem 3rem;
  height: ${({ theme }) => theme.values.baseVertical};
  ${({ isDarkMode }) => {
    if (isDarkMode)
      return css`
        background-color: ${({ theme }) => theme.colors.grayDark3};
      `;
  }}

  ${media.sm} {
    margin-left: 0;
  }
`;

const SectionBorder = styled(Border)`
  grid-row: 2/3;
  grid-column: 1/-1;
  margin-bottom: 3rem;
`;
