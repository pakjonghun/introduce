import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isFilterOpenState } from "../../../../recoil/postlist/atom";
import { media } from "../../../../styles/media";

const FilterHeader = () => {
  const setIsFilterOpen = useSetRecoilState(isFilterOpenState);

  return (
    <Container>
      <Title>Filter</Title>
      <Button onClick={() => setIsFilterOpen(false)}>&times;</Button>
    </Container>
  );
};

export default FilterHeader;

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  z-index: 11;
  background-color: ${({ theme }) => theme.colors.grayLight1};

  ${media.sm} {
    width: 100%;
    padding: 2rem 3rem;
    font-size: 2.1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight2};
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: ${({ theme }) => theme.values.baseRadius};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: 0.2s;
  z-index: 11;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.grayDark1};
  }

  &:active {
    transform: scale(1);
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.grayDark3};
`;
