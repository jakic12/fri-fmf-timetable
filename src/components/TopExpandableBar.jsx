import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import styled, { css } from "styled-components";
import Dropdown from "./Dropdown";
import { ColorContext } from "../util/colorSchemes";
import { ColorSchemeChangerContext } from "./ColorSchemeHandler";

import { LessonFilterManager } from "./LessonFilterHandler";

const TopMenuBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  height: ${(props) => props.rowHeight}vh;
  width: ${(props) => (props.expanded ? `100vw` : `1.5em`)};

  background: ${(props) => props.background};

  transition: 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

const TopMenuBarContent = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;

const ExpandButton = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  height: ${(props) => props.rowHeight}vh;
  width: 1.5em;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

// BUTTONS styles
const DropdownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;

  height: ${(props) => props.rowHeight}vh;
  width: 300px;
  background: ${(props) => props.background};

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const DropDownElement = styled.div`
  padding: 1em;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;
// BUTTONS styles

export default ({ rowHeight, duplicateLectures }) => {
  const [expanded, setExpanded] = useState();
  const colors = React.useContext(ColorContext);
  const colorSchemeChanger = React.useContext(ColorSchemeChangerContext);
  const lessonFilterManager = React.useContext(LessonFilterManager);

  const backgroundColor = colors.topMenuColor
    ? colors.topMenuColor
    : colors.topBar;

  const buttons = [
    () => {
      return (
        <Dropdown
          style={{ marginLeft: `1em` }}
          ButtonElement={() => (
            <DropdownButton
              background={backgroundColor}
              colors={colors}
              rowHeight={rowHeight}
            >
              Theme: {colorSchemeChanger.colorSchemeName || `undefined`}
            </DropdownButton>
          )}
          values={colorSchemeChanger.allNames.map((n) => ({ name: n }))}
          ListElement={({ element, open, onClick }) => (
            <DropDownElement
              onClick={onClick}
              onMouseEnter={() => {
                if (open)
                  colorSchemeChanger.setColorSchemePreview(element.name);
              }}
              onMouseLeave={() => {
                if (open) colorSchemeChanger.resetColorSchemePreview();
              }}
            >
              {element.name}
            </DropDownElement>
          )}
          onSelect={({ name }) => {
            colorSchemeChanger.setColorScheme(name, true);
          }}
          dropDownInnerListStyle={{
            background: backgroundColor,
          }}
        />
      );
    },
    () => (
      <Dropdown
        style={{ marginLeft: `1em` }}
        ButtonElement={() => (
          <DropdownButton
            background={backgroundColor}
            colors={colors}
            rowHeight={rowHeight}
          >
            Select class terms
          </DropdownButton>
        )}
        values={duplicateLectures}
        ListElement={({ element, onClick }) => (
          <DropDownElement onClick={onClick}>{element}</DropDownElement>
        )}
        onSelect={(elem) => {
          lessonFilterManager.setSelecting(elem);
        }}
        dropDownInnerListStyle={{
          background: backgroundColor,
        }}
      />
    ),
  ].map((f) => f());

  return (
    <TopMenuBar
      expanded={expanded}
      colors={colors}
      rowHeight={rowHeight}
      background={backgroundColor}
    >
      <ExpandButton
        onClick={() => {
          setExpanded(!expanded);
          //setColorSchemeName(`monokaiProWithColorText`);
        }}
        rowHeight={rowHeight}
      >
        <HiDotsVertical />
      </ExpandButton>
      <TopMenuBarContent>{buttons}</TopMenuBarContent>
    </TopMenuBar>
  );
};
