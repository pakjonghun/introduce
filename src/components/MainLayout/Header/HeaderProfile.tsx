import React from "react";
import styled from "styled-components";
import GridBox from "./GridBox";
import useRiseNumber from "../../../hooks/useRiseNumber";
import ProfileImg from "./ProfileImg";
import { fadeIn, fadeInAndRotate } from "../../../styles/animation";

const HeaderProfile = () => {
  const time = useRiseNumber({ endNumber: 2000, duration: 2000 });

  return (
    <HeaderRight>
      <GridBox />
      <ProfileImg />
      <SquareBoxImg>
        <Title>개발시작</Title>
        <Desc>{`${time}일`}</Desc>
      </SquareBoxImg>
      <SmallSquareBoxImg />
    </HeaderRight>
  );
};

export default HeaderProfile;

const HeaderRight = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 6rem);
  grid-template-rows: repeat(10, 6rem);
  justify-self: right;
`;

const SquareBoxImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 6 / span 2;
  grid-row: 8 / span 2;
  background-color: #0000de;
  z-index: 1;
  animation: ${fadeIn} 1.5s backwards;
`;

const SmallSquareBoxImg = styled.div`
  grid-column: 8 / span 1;
  grid-row: 10 / span 1;
  background-color: ${({ theme }) => theme.colors.grayDark3};
  animation: ${fadeInAndRotate} 2.5s ease-out backwards;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.colors.grayLight1};
  font-size: 1rem;
  font-weight: 400;
`;

const Desc = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grayLight1};
`;
