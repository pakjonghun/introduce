import React from "react";
import styled from "styled-components";
import { media } from "../../../../styles/media";
import { baseMenuHover } from "../../../../styles/typography";

const ExperienceDesc = () => {
  return (
    <Container>
      <MainDesc>
        <FirstLine>넘쳐나는 호기심으로 </FirstLine>
        <SecondLine>꾸준히 성장하고 있습니다.</SecondLine>
      </MainDesc>

      <MainDesc>
        <FirstLine>학습한 지식과 경험은</FirstLine>
        <SecondLine>잘 정리 하여 반복해서 회고 합니다.</SecondLine>
      </MainDesc>

      <MainDesc>
        <FirstLine>원활한 소통을 위해</FirstLine>
        <SecondLine>잘 정리된 개발 환경을 갖추려고 노력합니다.</SecondLine>
      </MainDesc>

      <Desc>
        <CommonDesc href='https://stitch-saw-c14.notion.site/43ab8c9cecb64cf981bd10609024a071'>
          배운 지식을 정리 하고, 회고 합니다.
        </CommonDesc>
        <CommonDesc href='https://github.com/pakjonghun'>
          꾸준히 작은 프로젝트를 진행 하고 있습니다.
        </CommonDesc>
        <CommonDesc>
          (주)ABC 스튜디오에서 프론트 개발자로 인턴 경험이 있습니다.
        </CommonDesc>
      </Desc>
    </Container>
  );
};

export default ExperienceDesc;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.grayDark3};
  ${media.sm} {
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 0;
  }
`;

const MainDesc = styled.div`
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 700;

  ${media.sm} {
    margin-bottom: 7rem;
  }
`;

const FirstLine = styled.p``;
const SecondLine = styled.p``;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  ${media.sm} {
    margin-top: 2rem;
  }
`;

const CommonDesc = styled.a`
  display: block;
  width: 90%;
  font-size: 2rem;
  border-bottom: 1px solid currentColor;
  padding: 2rem 0;
  cursor: pointer;
  transition: 0.2s;
  color: ${({ theme }) => theme.colors.grayDark1};

  &:hover {
    ${baseMenuHover}
  }

  ${media.sm} {
    border: none;
    flex-grow: 1;
    justify-content: space-between;
  }
`;
