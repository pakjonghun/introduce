import React, { useCallback } from "react";
import styled from "styled-components";
import InputGroup from "./InputGroup";
import { baseTextInput } from "../../../../../styles/typography";
import { useRecoilState } from "recoil";
import { selectedTagsState } from "../../../../../recoil/postlist/atom";

interface TagFilterProps {
  TagNameList: string[];
}

const TagFilter: React.FC<TagFilterProps> = ({ TagNameList }) => {
  const [selectedTags, setSelectedTags] = useRecoilState(selectedTagsState);

  const onTagInputFocus = useCallback((event: React.FormEvent) => {
    const ele = event.target as HTMLInputElement;
    ele.scrollLeft = 1500;
    ele.setSelectionRange(0, 100);
  }, []);

  const onChangeTag = useCallback(
    (tag: string) => {
      setSelectedTags((pre) => {
        if (pre.includes(tag)) return pre.filter((v) => v !== tag);
        else return [...pre, tag];
      });
    },
    [setSelectedTags]
  );

  return (
    <Container>
      <Title>HashTags</Title>
      <TextInputGroup>
        <TagInputValues
          onFocus={onTagInputFocus}
          value={selectedTags.join(", ")}
          placeholder='포함되는 내용'
        />
      </TextInputGroup>
      {TagNameList.map((tag) => (
        <InputGroup onChangeTag={onChangeTag} key={tag} tag={tag} />
      ))}
    </Container>
  );
};

export default TagFilter;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

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

const Title = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;
