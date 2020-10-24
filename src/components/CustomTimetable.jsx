import React from "react";
import Timetable from "react-timetable-events";
import { LightenDarkenColor } from "lighten-darken-color";
import styled, { createGlobalStyle } from "styled-components";
import "../App.css";

const useColorProp = (string, color) => string.replace("%COLOR%", color);

const StyledLecture = styled.div`
  width: 100%;
  background: ${(props) =>
    useColorProp(
      props.colors.cardBackground,
      props.colors.cardColors[props.lectureId]
    )};
  color: black;
  display: flex;
  flex-direction: row;
  border-radius: ${(props) => props.colors.cardBorderRadius || `2px`};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  text-shadow: -1px 1px 3px rgba(0, 0, 0, 0.3);
  color: ${(props) =>
    useColorProp(
      props.colors.cardTextColor,
      props.colors.cardColors[props.lectureId]
    )};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;

  border: ${(props) =>
    props.colors.cardBorder &&
    useColorProp(
      props.colors.cardBorder,
      props.colors.cardColors[props.lectureId]
    )};

  margin: 5px;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);
    margin: 3px;
  }
`;

const StyledLectureBody = styled.div`
  height: 100%;
  width: 80%;
  padding: 10px;
`;

const StyledLectureType = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    LightenDarkenColor(props.colors.cardColors[props.lectureId], -10)};
  position: relative;
  ${(props) =>
    props.colors.cardTypeTextColor
      ? `color:${props.colors.cardTypeTextColor};`
      : ``}
`;

const StyledLectureWrapper = styled.div`
  //padding:5px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
`;

const SmallField = styled.div`
  font-size: 0.6em;
`;

const TimetableStyle = createGlobalStyle`
  .styles_day_title__1y-BE {
    background: ${(props) => props.topBar};
  }

  .styles_hour__EXCif {
    background:${(props) => props.sideBar};
  }

  .styles_day__1cspH {
    background-color: ${(props) => props.backgroundColor};
    background-image: linear-gradient(${(props) =>
      props.backgroundAccentColor} 50%, transparent 50%);
  }

  .styles_time_table_wrapper__1-rtp{
    color:${(props) => props.tableTextColor}
  }
`;

const renderEvent = (event, defaultAttributes, styles, colors) => {
  defaultAttributes.className = "";
  return (
    <StyledLectureWrapper
      {...defaultAttributes}
      title={event.name}
      key={event.id}
    >
      <StyledLecture
        lectureId={event.lectureId}
        type={event.type}
        colors={colors}
      >
        <StyledLectureBody>
          <div style={{ fontWeight: `bold` }}>{event.name}</div>
          <SmallField>{event.professor}</SmallField>
          <SmallField>{event.class}</SmallField>
          <SmallField>
            {event.startTime.format("HH:mm")} - {event.endTime.format("HH:mm")}
          </SmallField>
        </StyledLectureBody>
        <StyledLectureType
          type={event.type}
          lectureId={event.lectureId}
          colors={colors}
        >
          {event.type}
        </StyledLectureType>
      </StyledLecture>
    </StyledLectureWrapper>
  );
};

export default ({ timeInterval, tableData, colors }) => (
  <>
    <TimetableStyle {...colors} />
    <Timetable
      hoursInterval={timeInterval}
      renderEvent={(e, d, s) => renderEvent(e, d, s, colors)}
      events={tableData}
    />
  </>
);
