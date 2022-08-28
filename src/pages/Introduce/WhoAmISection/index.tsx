import React, { forwardRef } from "react";
import styled from "styled-components";
import Border from "../../../components/Border";
import SectionTitle from "../../../components/SectionTitle";
import Experience from "./ExperienceList";
import ExperienceDesc from "./ExperienceDesc";
import useGetTypingText from "../../../hooks/useGetTypingText";
import useGetIsCurPage from "../useGetIsCurPage";
import { PAGE_ONE_TITLE } from "../../../texture/constants";

const WhoAmISection = () => {
  const isCurPage = useGetIsCurPage(2);

  const title = useGetTypingText({
    title: PAGE_ONE_TITLE,
    interval: 200,
    isAniStart: isCurPage,
  });

  return (
    <Container>
      <SectionHeading title={title} />
      <SectionBorder isAniStart={isCurPage} distance='1rem' height='0.2rem' />
      <SectionLeftBody />
      <SectionRightBody />
    </Container>
  );
};

export default WhoAmISection;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content min-content 1fr;
  grid-row-gap: 3rem;
  grid-column-gap: 10rem;
  height: 100vh;
  padding: 8rem 3rem 2rem 10rem;
`;

const SectionHeading = styled(SectionTitle)`
  grid-row: 1/2;
  grid-column: 1/-1;
`;

const SectionBorder = styled(Border)`
  grid-row: 2/3;
  grid-column: 1/-1;
  margin-bottom: 3rem;
`;

const SectionLeftBody = styled(Experience)``;

const SectionRightBody = styled(ExperienceDesc)``;
