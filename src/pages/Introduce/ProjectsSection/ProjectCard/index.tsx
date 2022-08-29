import styled, { css } from "styled-components";
import { fadeInAndRotateByAngle } from "../../../../styles/animation";
import { PAGE_TWO_TITLE } from "../../../../texture/constants";
import useGetIsCurPage from "../../hooks/useGetIsCurPage";

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
  sticker,
  createdAt,
  desc,
  gitRepo,
  url,
  projectNum,
}) => {
  const charList = PAGE_TWO_TITLE.replace(" ", "").slice(
    (projectNum - 1) * 2,
    projectNum * 2
  );

  const isCurPage = useGetIsCurPage(3);

  return (
    <Container projectNum={projectNum}>
      <LeftChar isAniShow={isCurPage} projectNum={projectNum}>
        {charList[0].toUpperCase()}
      </LeftChar>
      <RightChar isAniShow={isCurPage} projectNum={projectNum}>
        {charList[1].toUpperCase()}
      </RightChar>
      <Wrapper>
        <ProjectImg src={img} />
        <ProjectInfo>
          <Sticker>{sticker}</Sticker>
          <CreatedAt>{createdAt} 만듬</CreatedAt>
          <Desc>{desc}</Desc>
          <LinkList>
            <Link href={url}>배포 링크</Link>
            <Link href={gitRepo}>깃허브 저장소</Link>
          </LinkList>
        </ProjectInfo>
      </Wrapper>
    </Container>
  );
};

export default ProjectCard;

interface ProjectNum {
  projectNum: number;
}

interface CharProp {
  projectNum: number;
  isAniShow: boolean;
}

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

const CreatedAt = styled.span`
  font-size: 1.2rem;
`;

const Desc = styled.div`
  color: ${({ theme }) => theme.colors.grayDark3};
`;

const LinkList = styled.div``;

const Link = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grayDark1};
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.grayDark3};
  }

  &:active {
    color: ${({ theme }) => theme.colors.grayDark1};
  }
`;

const ProjectImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 10px;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const Sticker = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: fit-content;
  padding: 0.2rem 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.grayLight1};
  background-color: ${({ theme }) => theme.colors.grayDark1};
`;

const LeftChar = styled.span<CharProp>`
  position: absolute;
  ${({ projectNum, isAniShow }) => {
    let top = "";
    let left = "";
    if (projectNum === 1) {
      top = "-10rem";
      left = "-1rem";
    }

    if (projectNum === 2) {
      top = "-6rem";
      left = "-2rem";
    }

    if (projectNum === 3) {
      top = "-7rem";
      left = "-3rem";
    }

    if (isAniShow) {
      return css`
        top: ${top};
        left: ${left};
        animation: ${fadeInAndRotateByAngle("370deg")} 1s 1s backwards;
      `;
    } else {
      return css`
        top: ${top};
        left: ${left};
      `;
    }
  }}

  font-size: 7rem;
  transform: rotate(10deg);
  z-index: -1;
`;

const RightChar = styled.span<CharProp>`
  position: absolute;
  ${({ projectNum, isAniShow }) => {
    let bottom = "";
    let right = "";
    if (projectNum === 1) {
      bottom = "-3rem";
      right = "-2rem";
    }

    if (projectNum === 2) {
      bottom = "-6rem";
      right = "-0rem";
    }

    if (projectNum === 3) {
      bottom = "-3rem";
      right = "-3rem";
    }

    if (isAniShow) {
      return css`
        bottom: ${bottom};
        right: ${right};
        animation: ${fadeInAndRotateByAngle("-380deg")} 1s 1s backwards;
      `;
    } else {
      return css`
        bottom: ${bottom};
        right: ${right};
      `;
    }
  }}

  font-size: 7rem;
  transform: rotate(-20deg);
  z-index: -1;
`;
