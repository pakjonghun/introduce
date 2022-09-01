import React, { useCallback } from "react";
import styled from "styled-components";
import TagInputItem from "../TagInputItem";
import { useSetRecoilState } from "recoil";
import { selectedTagsState } from "../../../../../recoil/postlist/atom";
import TextInput from "../TextInput";

interface TagfilterProp {
  tagNameList: string[];
}

const TagFilterBody: React.FC<TagfilterProp> = ({ tagNameList }) => {
  const setSelectedTags = useSetRecoilState(selectedTagsState);
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
      <TextInput />
      {tagNameList.map((tagName) => (
        <TagInputItem
          onChangeTag={onChangeTag}
          key={tagName}
          tagName={tagName}
        />
      ))}
    </Container>
  );
};

export default TagFilterBody;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

const Title = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;
