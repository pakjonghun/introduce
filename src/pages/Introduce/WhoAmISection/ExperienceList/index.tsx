import React from "react";
import styled from "styled-components";
import { media } from "../../../../styles/media";
import ExperienceItem from "./ExperienceItem";
import useGetTotalCount from "./useGetTotalTilCount";

const Experience = () => {
  const totalTilCount = useGetTotalCount();

  return (
    <Container>
      <Text>꾸준히 성장하는 사람</Text>
      <ProjectExp
        unit='건'
        desc='토이 프로젝트'
        duration={3000}
        endNumber={10}
      />
      <TILExp
        unit='회'
        desc='TIL회고'
        duration={3000}
        endNumber={totalTilCount}
      />
      <InteonExp unit='일' desc='인턴경력' duration={3000} endNumber={30} />
    </Container>
  );
};

export default Experience;

const Container = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: min-content min-content repeat(6, min-content);

  ${media.sm} {
    grid-template-rows: repeat(4, min-content);
  }
`;

const Text = styled.span`
  grid-column: 1/-1;
  grid-row: 1/2;
  font-size: 3rem;
  justify-self: right;
  margin-top: 3rem;

  ${media.sm} {
    justify-self: center;
  }
`;

const ProjectExp = styled(ExperienceItem)`
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: end;
  align-self: start;

  ${media.sm} {
    align-self: end;
    justify-self: end;
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

const TILExp = styled(ExperienceItem)`
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: end;

  ${media.sm} {
    ${media.sm} {
      justify-self: center;
      grid-column: 2/3;
      grid-row: 3/5;
    }
  }
`;

const InteonExp = styled(ExperienceItem)`
  grid-column: 1/2;
  grid-row: 3/4;
  justify-self: center;
  align-self: center;
  color: ${({ theme }) => theme.colors.grayLight1};
  background-color: ${({ theme }) => theme.colors.grayDark3};

  ${media.sm} {
    justify-self: center;
  }
`;
