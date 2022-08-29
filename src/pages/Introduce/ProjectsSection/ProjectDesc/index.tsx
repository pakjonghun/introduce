import React from "react";
import styled, { css } from "styled-components";

interface ProjectDescProps {
  topText: string;
  bottomText: string;
  projectNum: number;
}

const ProjectDesc: React.FC<ProjectDescProps> = ({
  projectNum,
  topText,
  bottomText,
}) => {
  return (
    <Container projectNum={projectNum}>
      <Desc>{topText}</Desc>
      <Desc>{bottomText}</Desc>
    </Container>
  );
};

export default ProjectDesc;

interface ProjectNumProp {
  projectNum: number;
}

const Container = styled.div<ProjectNumProp>`
  ${({ projectNum }) => {
    let gridRow = "";

    if (projectNum === 1) gridRow = "2/3";
    if (projectNum === 2) gridRow = "1/2";
    if (projectNum === 3) gridRow = "3/4";

    return css`
      font-size: ${projectNum === 3 ? "2.1rem" : "3rem"};
      grid-row: ${gridRow};
      grid-column: ${projectNum} / span 2;
    `;
  }};
`;

const Desc = styled.p`
  color: ${({ theme }) => theme.colors.grayLight1};
  font-weight: 400;
`;
