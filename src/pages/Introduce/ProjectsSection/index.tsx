import React from "react";
import styled, { css } from "styled-components";
import SectionLayout from "../../../components/SectionLayout";
import { rightFadeIn } from "../../../styles/animation";
import { media } from "../../../styles/media";
import { PAGE_TWO_TITLE } from "../../../texture/constants";
import useGetIsCurPage from "../hooks/useGetIsCurPage";
import ProjectCard from "./ProjectCard";
import ProjectDesc from "./ProjectDesc";

const ProjectsSection = () => {
  const isCurpage = useGetIsCurPage(3);

  return (
    <SectionLayout isDarkMode={true} title={PAGE_TWO_TITLE} page={3}>
      <SectionBody>
        <ProjectDesc
          topText='백엔드 개발자와 원활히 소통하기 위해'
          bottomText='필요한 API기능을 추가한 초과근무관리'
          projectNum={1}
        />
        <ProjectDesc
          topText='최적화된 스크롤링에 중점을 둔 프로젝트 입니다.'
          bottomText='영화와 드라마를 검색합니다. Movie & TV'
          projectNum={2}
        />
        <ProjectDesc
          topText='원하는 여행지를 찾는'
          bottomText='Today Trip 프로젝트'
          projectNum={3}
        />

        <CardContainer>
          <ProjectCardList isAniShow={isCurpage}>
            <ProjectCard
              projectNum={1}
              img='https://imagedelivery.net/0ZP-N9B45ji28JoChYUvWw/e7fff0e1-9c1a-45cb-19b9-89e59b54b500/projectCard'
              createdAt='2022-06'
              desc='초과근무 관리'
              gitRepo='https://github.com/pakjonghun/timeout-frontend'
              url='http://fireking5997.com/login'
              sticker='개인'
            />
            <ProjectCard
              projectNum={2}
              img='https://imagedelivery.net/0ZP-N9B45ji28JoChYUvWw/21bc0df2-00f4-4e53-fc73-8ab9e4362400/projectCard'
              createdAt='2022-05'
              desc='Movie & TV'
              gitRepo='https://github.com/pakjonghun/search-movie'
              url='https://prismatic-daifuku-e90524.netlify.app/movies/popular'
              sticker='개인'
            />
            <ProjectCard
              projectNum={3}
              img='https://imagedelivery.net/0ZP-N9B45ji28JoChYUvWw/879a8498-a87f-405a-4380-e7657693a300/projectCard'
              createdAt='2022-03'
              desc='today trip'
              gitRepo='https://github.com/pakjonghun/today-trip'
              url='https://today-trip.netlify.app/'
              sticker='개인'
            />
          </ProjectCardList>
        </CardContainer>
      </SectionBody>
    </SectionLayout>
  );
};

export default ProjectsSection;

interface IsAniShow {
  isAniShow: boolean;
}

const SectionBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, min-content) 20rem;
  align-content: center;
  grid-row-gap: 8rem;
  letter-spacing: 0px;
  ${media.xs} {
    position: relative;
    top: -20rem;
    align-content: center;
    grid-template-columns: 1fr;
  }
`;

const CardContainer = styled.div`
  position: relative;
  grid-row: 4/5;
  grid-column: 1/-1;

  ${media.sm} {
    grid-row: 5/6;
  }
`;

const ProjectCardList = styled.div<IsAniShow>`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  justify-items: center;
  width: 100%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${({ isAniShow }) => {
    if (isAniShow) {
      return css`
        animation: ${rightFadeIn} 1s;
      `;
    }
  }}

  ${media.sm} {
    grid-row-gap: 7rem;
  }

  ${media.xs} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 8rem;
    top: 45%;
  }
`;
