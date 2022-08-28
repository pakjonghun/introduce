import React from "react";
import styled, { css } from "styled-components";
import useGetCountingNumber from "../../../../hooks/useGetCountingNumber";
import { scaleUp } from "../../../../styles/animation";
import { easeOutQuad } from "../../../../utils/styleFunctions";
import useGetIsCurPage from "../../hooks/useGetIsCurPage";

interface ExperienceCountProps {
  endNumber: number;
  unit: string;
  duration: number;
  desc: string;
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
}

const ExperienceItem: React.FC<ExperienceCountProps> = ({
  endNumber,
  duration,
  desc,
  unit,
  ...styles
}) => {
  const isCurPage = useGetIsCurPage(2);
  const count = useGetCountingNumber({
    endNumber,
    duration,
    isAniStart: isCurPage,
  });

  return (
    <Container endNumber={endNumber} isCurPage={isCurPage} {...styles}>
      <Wrapper>
        <Count endNumber={endNumber}>{`${count}${unit}`}</Count>
        <Desc endNumber={endNumber}>{desc}</Desc>
      </Wrapper>
    </Container>
  );
};

export default ExperienceItem;

interface EndNumber {
  endNumber: number;
}

interface ExperienceItemStyles {
  endNumber: number;
  isCurPage: boolean;
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
}

const Container = styled.div<ExperienceItemStyles>`
  position: relative;
  border-radius: 50%;
  border: 1px solid currentColor;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transform-origin: bottom left;

  ${({ endNumber, theme, width, height, color, backgroundColor, isCurPage }) =>
    css`
      width: ${width || easeOutQuad(endNumber)}rem;
      height: ${height || easeOutQuad(endNumber)}rem;
      color: ${color || theme.colors.grayDark3};
      background-color: ${backgroundColor || theme.colors.grayLight1};
      border-color: ${color || theme.colors.grayDark3};
      animation: ${scaleUp(isCurPage)} 1s forwards;
    `}
`;

const Count = styled.span<EndNumber>`
  font-size: 3rem;
  font-weight: 700;
`;
const Desc = styled.p<EndNumber>`
  font-size: 1rem;
  font-weight: 400;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  text-align: center;
`;
