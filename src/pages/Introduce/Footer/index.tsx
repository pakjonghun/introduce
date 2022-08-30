import React from "react";
import styled from "styled-components";
import { media } from "../../../styles/media";
import { getSvgIcon } from "../../../styles/typography";

const Footer = () => {
  return (
    <Container>
      <ContactList>
        <Phone>{process.env.REACT_APP_PHONE}</Phone>
        <Email>{process.env.REACT_APP_EMAIL}</Email>
        <GitHub>
          <Link href={process.env.REACT_APP_GITHUB}>
            {process.env.REACT_APP_GITHUB}
          </Link>
        </GitHub>
      </ContactList>
      <Notice>
        해당 디자인은 <Link href='https://dribbble.com/'>Dribble</Link> 사이트
        를 참고 했습니다.
      </Notice>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  max-width: 130rem;
  padding: 3rem 2rem;
  margin: 0 auto;
  margin-left: 7rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grayDark2};
  background-color: ${({ theme }) => theme.colors.grayDark3};

  ${media.sm} {
    margin-left: 0;
  }
`;

const ContactList = styled.ul`
  display: flex;
  justify-content: space-around;

  *:not(:last-child) {
    margin-right: 2rem;

    ${media.sm} {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }

  ${media.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

const Email = styled.li`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -4rem;
    top: 55%;
    transform: translateY(-50%);

    ${getSvgIcon({
      color: "currentColor",
      width: 3,
      height: 3,
      iconName: "mail",
    })}
  }
`;

const Phone = styled.li`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -4rem;
    top: 55%;
    transform: translateY(-50%);

    ${getSvgIcon({
      color: "currentColor",
      width: 3,
      height: 3,
      iconName: "mobile",
    })}
  }
`;
const GitHub = styled.li`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -4rem;
    top: 55%;
    transform: translateY(-50%);

    ${getSvgIcon({
      color: "currentColor",
      width: 3,
      height: 3,
      iconName: "github",
    })}
  }
`;
const Notice = styled.p`
  margin-top: 2rem;
  text-align: center;
`;

const Link = styled.a`
  &:hover {
    color: ${({ theme }) => theme.colors.grayDark1};
  }

  &:active {
    color: inherit;
  }
`;
