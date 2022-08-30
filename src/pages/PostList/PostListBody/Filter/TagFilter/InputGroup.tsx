import React from "react";
import styled from "styled-components";

interface InpugGroupProp {
  tag: string;
  onChangeTag: (value: string) => void;
}

const InpugGroup: React.FC<InpugGroupProp> = ({ tag, onChangeTag }) => {
  return (
    <Container>
      <Input
        onChange={(event) => onChangeTag(event.target.value)}
        value={tag}
        type='checkbox'
        id={tag}
      />
      <Label htmlFor={tag}>{tag}</Label>
    </Container>
  );
};

export default InpugGroup;

const Container = styled.div`
  flex: 1;
  margin: 0.5rem;
`;

const Input = styled.input`
  display: none;
  &:checked + label {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    outline-color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  outline: 1px solid transparent;
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.values.baseRadius};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    outline-color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  &:active {
    opacity: 0.7;
  }
`;
