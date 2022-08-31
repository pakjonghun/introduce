import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  isSortOpenState,
  sortState,
} from "../../../../../recoil/postlist/atom";
import { getSvgIcon } from "../../../../../styles/typography";
import { SortValue } from "../interfaces";
import { toHangle } from "../utils";

interface OptionItemProp {
  sortItem: string;
}

const OptionItem: React.FC<OptionItemProp> = ({ sortItem }) => {
  const setSort = useSetRecoilState(sortState);
  const setIsSortOpen = useSetRecoilState(isSortOpenState);
  const [key, value] = sortItem.split(" ").map((s) => s.trim());

  const optionValue =
    sortItem === "없음" ? "없음" : `${key.toUpperCase()} / ${toHangle(value)}`;

  const onOptionItemClick = useCallback(
    (key: string) => {
      if (key === "없음") setSort(["", ""]);
      else setSort([key, value]);
      setIsSortOpen(false);
    },
    [setIsSortOpen, setSort, value]
  );

  return (
    <Item sortValue={value} key={key} onClick={() => onOptionItemClick(key)}>
      {optionValue}
    </Item>
  );
};

export default OptionItem;

const Item = styled.li<SortValue>`
  position: relative;
  padding: 0.7rem 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.grayLight1};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  &:before {
    content: "";
    position: absolute;
    right: 1.5rem;

    ${({ sortValue, theme }) => {
      if (sortValue) {
        return getSvgIcon({
          width: 2,
          height: 2,
          color: theme.colors.grayLight4,
          iconName:
            sortValue === "asc" ? "sort-amount-asc" : "sort-amount-desc",
        });
      }
    }}
  }
`;
