import React from "react";
import styled from "styled-components";
import { PuffLoader } from "react-spinners";

const LoadingDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: white;

  opacity: ${(props) => (props.loaded ? 0 : 1)};
  transition: all 0.6s;
  transition-delay: 0.8s;

  z-index: 1000;

  pointer-events: none;
`;

const SideLoading = styled.div`
  background: #46596b;
  width: ${(props) => (props.loaded ? "5rem" : "100vw")};
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-delay: 0.4s;

  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
`;

const TopLoading = styled.div`
  background: #34495d;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;

  height: ${(props) => (props.loaded ? `${props.rowHeight}vh` : "100vh")};
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export default ({ loaded, error, rowHeight }) => (
  <LoadingDiv loaded={loaded || !!error}>
    <SideLoading loaded={loaded}></SideLoading>
    <TopLoading loaded={loaded} rowHeight={rowHeight}></TopLoading>
    <PuffLoader />
  </LoadingDiv>
);
