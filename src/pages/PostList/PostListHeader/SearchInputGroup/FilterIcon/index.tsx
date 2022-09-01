import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isFilterOpenState } from "../../../../../recoil/postlist/atom";
import { getSvgIcon } from "../../../../../styles/typography";

const FilterIcon = () => {
  const setIsFilterOpen = useSetRecoilState(isFilterOpenState);
  const onFilterClick = useCallback(() => {
    setIsFilterOpen((pre) => !pre);
  }, [setIsFilterOpen]);

  return <Container onClick={onFilterClick} />;
};

export default FilterIcon;

const Container = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1) translateY(-50%);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  &:active {
    transform: scale(1) translateY(-50%);
  }

  ${getSvgIcon({
    color: "currentColor",
    width: 2,
    height: 2,
    iconName: "filter_list",
  })}
`;
