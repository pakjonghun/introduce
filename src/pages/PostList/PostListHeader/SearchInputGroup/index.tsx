import React from "react";
import styled from "styled-components";
import { getSvgIcon } from "../../../../styles/typography";
import FilterIcon from "./FilterIcon";
import SearchInput from "./SearchInput";

const SearchInputGroup = () => {
  return (
    <SearchGroup>
      <SearchInput />
      <SearchIcon />
      <FilterIcon />
    </SearchGroup>
  );
};

export default SearchInputGroup;

const SearchGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  z-index: 10;
  color: ${({ theme }) => theme.colors.secondary};
  transition: 0.2s;

  ${getSvgIcon({
    color: "currentColor",
    width: 2,
    height: 2,
    iconName: "search",
  })}
`;
