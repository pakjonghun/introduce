import React from "react";
import styled from "styled-components";
import { blinking } from "../../styles/animation";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default SectionTitle;

const Container = styled.div``;

const Title = styled.h1`
  position: relative;
  padding-left: 1rem;
  line-height: 1.3;
  margin-top: 3rem;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.grayDark3};
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0.2rem;
    height: 3.5rem;
    margin-left: 0.1rem;
    background-color: ${({ theme }) => theme.colors.grayDark1};
    animation: ${({ theme }) => blinking(theme)} 1s infinite;
    z-index: 1;
  }
`;
