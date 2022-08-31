import React, { useCallback } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedTagsState } from "../../../../../recoil/postlist/atom";
import { baseTextInput } from "../../../../../styles/typography";

const TextInput = () => {
  const selectedTags = useRecoilValue(selectedTagsState);
  const onTagInputFocus = useCallback((event: React.FormEvent) => {
    const ele = event.target as HTMLInputElement;
    ele.scrollLeft = 1500;
    ele.setSelectionRange(0, 100);
  }, []);

  return (
    <TextInputGroup>
      <TagInputValues
        readOnly={true}
        onFocus={onTagInputFocus}
        value={selectedTags.join(", ")}
        placeholder='포함되는 내용'
      />
    </TextInputGroup>
  );
};

export default TextInput;

const TextInputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;

  &::before {
    content: "#";
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus-within::before {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TagInputValues = styled.input`
  width: 100%;
  padding: 0.7rem 1rem 0.7rem 2rem;
  background-color: transparent;

  ${({ theme }) =>
    baseTextInput({
      color: theme.colors.secondary,
      focusColor: theme.colors.primary,
    })}
`;
