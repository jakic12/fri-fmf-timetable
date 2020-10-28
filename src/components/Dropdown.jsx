import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";

const MainButtonWrapper = styled.div`
  position: relative;
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const MainInnerButtonWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ShadowWrapper = styled.div`
  position: relative;
  z-index: 150;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    border-radius: 3px;
    ${(props) =>
      props.open &&
      css`
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25),
          0 6px 6px rgba(0, 0, 0, 0.22);
      `}
  }
`;

const DropdownBody = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.height};

  z-index: 150;
  overflow: hidden;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const DropdownInnerList = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0 0 3px 3px;
`;

function childOf(c, p) {
  while ((c = c.parentNode) && c !== p);
  return !!c;
}

/**
 * @typedef {object} Props
 * @prop {object} ButtonElement optional
 * @prop {object} ListElement optional
 * @prop {function} onSelect
 * @prop {Array<object>} values
 */
export default ({
  ButtonElement,
  ListElement,
  onSelect,
  values,
  dropDownInnerListStyle,
  onOpen,
  style,
}) => {
  const [open, setOpen] = useState();
  const dropDownBodyRef = useRef();
  const mainButtonWrapperRef = useRef();
  const dropdownInnerListRef = useRef();

  const closeDropdown = (event) => {
    if (
      !(
        childOf(event.target, dropDownBodyRef.current) ||
        childOf(event.target, mainButtonWrapperRef.current)
      )
    ) {
      setOpen(false);
      document.removeEventListener("click", closeDropdown);
    }
  };

  const toggle = (event) => {
    if (!childOf(event.target, dropDownBodyRef.current)) {
      if (!open) {
        if (onOpen) onOpen();
        document.addEventListener("click", closeDropdown);
      } else {
        document.removeEventListener("click", closeDropdown);
      }
      console.log("new state:", !open);
      setOpen(!open);
    }
  };

  return (
    <MainButtonWrapper
      open={open}
      onClick={toggle}
      ref={mainButtonWrapperRef}
      style={style}
    >
      <ShadowWrapper open={open}>
        <MainInnerButtonWrapper open={open}>
          <ButtonElement />
        </MainInnerButtonWrapper>
        <DropdownBody
          open={open}
          marginTop={
            mainButtonWrapperRef.current &&
            mainButtonWrapperRef.current.offsetHeight + "px"
          }
          ref={dropDownBodyRef}
          height={
            !open
              ? 0
              : dropdownInnerListRef.current &&
                dropdownInnerListRef.current.offsetHeight + "px"
          }
        >
          <DropdownInnerList
            ref={dropdownInnerListRef}
            style={dropDownInnerListStyle}
          >
            {values &&
              values.map((props, key) => (
                <ListElement
                  key={key}
                  element={props}
                  open={open}
                  onClick={(event) => onSelect(props, event)}
                />
              ))}
          </DropdownInnerList>
        </DropdownBody>
      </ShadowWrapper>
    </MainButtonWrapper>
  );
};
