import React from "react";
import styled from "styled-components";

const GridBox = () => {
  return (
    <Container>
      {Array(60)
        .fill(0)
        .map((_, i) => (
          <Square key={i} />
        ))}
      <BlackSquare />
    </Container>
  );
};

export default GridBox;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1px;
  grid-column: 1 / span 3;
  grid-row: 1 / span 3;
  background-color: ${({ theme }) => theme.colors.grayLight3};
  border: 3px solid ${({ theme }) => theme.colors.grayDark3};
`;

const Square = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const BlackSquare = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayDark3};
`;
