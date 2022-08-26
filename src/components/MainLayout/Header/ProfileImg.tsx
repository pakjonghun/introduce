import React from "react";
import styled from "styled-components";

const ProfileImg = () => {
  return (
    <Container>
      <TextLine fill='black' height='100%' width='100%'>
        <path id='line' d='M80,20 S150,32 174,110 L177 130' fill='none' />
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
  background-color: red;
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
