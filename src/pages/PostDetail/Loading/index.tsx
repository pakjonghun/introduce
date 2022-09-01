import React from "react";
import styled from "styled-components";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Loading = () => {
  return (
    <Container>
      <LoadingSpinner />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  align-items: cneter;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
