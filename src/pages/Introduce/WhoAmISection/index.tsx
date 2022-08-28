import React from "react";
import styled from "styled-components";
import Experience from "./ExperienceList";
import ExperienceDesc from "./ExperienceDesc";
import { PAGE_ONE_TITLE } from "../../../texture/constants";
import SectionLayout from "../../../components/SectionLayout";

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10rem;
`;

const SectionLeftBody = styled(Experience)``;
const SectionRightBody = styled(ExperienceDesc)``;
