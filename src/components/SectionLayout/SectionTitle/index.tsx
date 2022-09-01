import React from "react";
import styled from "styled-components";
import { blinking } from "../../../styles/animation";
import { media } from "../../../styles/media";
import { IsDarkModeProp } from "../interface";

interface SectionTitleProps {
  title: string;
  isDarkMode?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  isDarkMode = false,
  title,
}) => {
  return (
    <Container>
      <Title isDarkMode={isDarkMode}>{title}</Title>
    </Container>
  );
};

export default SectionTitle;

const Container = styled.div``;

const Title = styled.h1<IsDarkModeProp>`
  position: relative;
  height: 6.5rem;
  padding-left: 1rem;
  line-height: 1.3;
  letter-spacing: 3px;
  margin-top: 3rem;
  font-size: 5rem;
  color: ${({ theme, isDarkMode }) =>
    isDarkMode ? theme.colors.grayLight1 : theme.colors.grayDark3};
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0.2rem;
    height: 4rem;
    margin-left: 0.1rem;
    animation: ${({ theme, isDarkMode }) => blinking(theme, isDarkMode)} 0.8s
      linear infinite;
    z-index: 1;
  }

  ${media.sm} {
    padding-left: 0;
  }
`;
