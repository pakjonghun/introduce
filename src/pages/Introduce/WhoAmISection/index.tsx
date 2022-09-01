import React from "react";
import styled from "styled-components";
import Experience from "./ExperienceList";
import ExperienceDesc from "./ExperienceDesc";
import { PAGE_ONE_TITLE } from "../../../constant/constants";
import SectionLayout from "../../../components/SectionLayout";
import { media } from "../../../styles/media";

const WhoAmISection = () => {
  return (
    <SectionLayout title={PAGE_ONE_TITLE} page={2}>
      <SectionBody>
        <SectionLeftBody />
        <SectionRightBody />
      </SectionBody>
    </SectionLayout>
  );
};

export default WhoAmISection;

const SectionBody = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  grid-column-gap: 10rem;
  ${media.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 35% 1fr;
  }
`;

const SectionLeftBody = styled(Experience)``;
const SectionRightBody = styled(ExperienceDesc)``;
