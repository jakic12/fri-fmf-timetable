import React from "react";
import styled from "styled-components";
import { ColorContext } from "../util/colorSchemes";

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

export default ({ error }) => {
  const colors = React.useContext(ColorContext);
  return (
    <ErrorWrapper background={colors.topBar}>
      <ErrorCard>{error}</ErrorCard>
    </ErrorWrapper>
  );
};
