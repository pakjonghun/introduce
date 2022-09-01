import React from "react";
import styled from "styled-components";

interface ProjectInfoProps {
  sticker: string;
  createdAt: string;
  desc: string;
  url: string;
  gitRepo: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  sticker,
  createdAt,
  url,
  desc,
  gitRepo,
}) => {
  return (
    <Container>
      <Sticker>{sticker}</Sticker>
      <CreatedAt>{createdAt} 만듬</CreatedAt>
      <Desc>{desc}</Desc>
      <LinkList>
        <Link href={url}>배포</Link>
        <Link href={gitRepo}>깃허브</Link>
      </LinkList>
    </Container>
  );
};

export default ProjectInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const Sticker = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: fit-content;
  padding: 0.2rem 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.grayLight1};
  background-color: ${({ theme }) => theme.colors.grayDark1};
`;
const CreatedAt = styled.span`
  font-size: 1.2rem;
`;

const Desc = styled.div`
  color: ${({ theme }) => theme.colors.grayDark3};
`;

const LinkList = styled.div``;

const Link = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grayDark1};
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.grayDark3};
  }

  &:active {
    color: ${({ theme }) => theme.colors.grayDark1};
  }
`;
