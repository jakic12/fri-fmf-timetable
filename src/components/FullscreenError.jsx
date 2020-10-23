import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorCard = styled.div`
  background: #e74c3c;
  border-radius: 2px;
  padding: 10px;
`;

export default ({ error }) => (
  <ErrorWrapper>
    <ErrorCard>{error}</ErrorCard>
  </ErrorWrapper>
);