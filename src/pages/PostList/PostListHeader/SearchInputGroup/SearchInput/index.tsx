import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { baseTextInput } from "../../../../../styles/typography";
import useSetDbounce from "./useSetDbounce";

const SearchInput = () => {
  const [tempTerm, setTempTerm] = useState("");
  const onInputChange = useCallback((value: string) => {
    setTempTerm(value);
  }, []);
  useSetDbounce(tempTerm);

  return (
    <Container
      value={tempTerm}
      onChange={(event) => onInputChange(event.target.value)}
      placeholder='Search'
    />
  );
};

export default SearchInput;

const Container = styled.input`
  width: 24rem;
  padding: 1rem 2rem 1rem 4rem;

  ${({ theme }) =>
    baseTextInput({
      color: theme.colors.secondary,
      focusColor: theme.colors.primary,
    })}

  &:focus + span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
