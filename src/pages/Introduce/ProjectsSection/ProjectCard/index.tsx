import styled, { css } from "styled-components";
import { media } from "../../../../styles/media";
import BackgroundChar from "./BackgroundChar";
import { ProjectNum } from "./interface";
import ProjectInfo from "./ProjectInfo";

interface ProjectCardProps {
  img: string;
  sticker: string;
  createdAt: string;
  desc: string;
  gitRepo: string;
  url: string;
  projectNum: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  projectNum,
  ...props
}) => {
  return (
    <Container projectNum={projectNum}>
      <BackgroundChar projectNum={projectNum} />
      <Wrapper>
        <ProjectImg src={img} />
        <ProjectInfo {...props} />
      </Wrapper>
    </Container>
  );
};

export default ProjectCard;

const Container = styled.div<ProjectNum>`
  position: relative;
  width: 25rem;

  ${({ projectNum }) => {
    let rotate = "";
    if (projectNum === 1) rotate = "5deg";
    if (projectNum === 2) rotate = "-5deg";
    if (projectNum === 3) rotate = "5deg";

    return css`
      grid-column: ${projectNum} / span 1;
      transform: rotate(${rotate});
    `;
  }}

  ${media.sm} {
    width: 30rem;
  }

  ${media.xs} {
    transform: rotate(0);
    grid-column: 1/-1;
    width: 30rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.light};
  background-color: ${({ theme }) => theme.colors.grayLight3};
  z-index: 10;
  transform-origin: right;
`;

const ProjectImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 10px;
`;
