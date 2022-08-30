import React from "react";
import styled from "styled-components";
import { media } from "../../../../styles/media";

const ProfileImg = () => {
  return (
    <Container>
      <TextLine fill='black' height='100%' width='100%'>
        <Path id='line' d='M80,20 S150,32 174,110 L177 130' fill='none' />
        <text>
          <textPath className='line' xlinkHref='#line'>
            Frontend Developer
          </textPath>
        </text>
      </TextLine>
    </Container>
  );
};

export default ProfileImg;

const Container = styled.div`
  position: relative;
  grid-column: 3 / span 4;
  grid-row: 3 / span 6;
  height: 100%;
  width: 100%;
  border-radius: 12rem;
  background: url("https://imagedelivery.net/0ZP-N9B45ji28JoChYUvWw/edb140c3-555c-4bde-103f-828f90941600/origin")
    center no-repeat;
  background-size: cover;
`;

const TextLine = styled.svg`
  position: absolute;
  top: -3rem;
  right: -7rem;
  .line {
    user-select: none;
    font-weight: 700;
  }
`;

const Path = styled.path`
  ${media.xl} {
    d: path("M80,20 S150,32 164,110 L167 130");
  }

  ${media.lg} {
    d: path("M80,20 S148,32 149,110 L163 130");
  }

  ${media.md} {
    d: path("M80,20 S135,32 135,110 L163 130");
  }

  ${media.sm} {
    d: path("M80,20 S120,32 120,110 L163 130");
  }

  ${media.xs} {
    d: path("M80,20 S115,32 110,110 L160 130");
  }
`;
