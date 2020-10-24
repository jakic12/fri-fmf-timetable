import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import styled from "styled-components";

const ExpandButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  height: ${(props) => props.rowHeight}vh;
  width: ${(props) => (props.expanded ? `100vw` : `1.5em`)};
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export default ({ buttons, rowHeight, setColorSchemeName }) => {
  const [expanded, setExpanded] = useState();

  return (
    <ExpandButton
      onClick={() => {
        setExpanded(!expanded);
        setColorSchemeName(`monokaiProWithColorText`);
      }}
      rowHeight={rowHeight}
    >
      <HiDotsVertical />
    </ExpandButton>
  );
};
