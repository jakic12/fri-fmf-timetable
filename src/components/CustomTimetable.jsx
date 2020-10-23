import React from "react";
import Timetable from "react-timetable-events";
import { LightenDarkenColor } from "lighten-darken-color";
import styled from "styled-components";
import "../App.css";

const LectureColors = [
  "#e74c3c",
  "#3498db",
  "#2ecc71",
  "#f1c40f",
  "#9b59b6",
  "#1abc9c",
  "#e67e22",
  "#34495e",
];

const StyledLecture = styled.div`
  width: 100%;
  background: ${(props) => LectureColors[props.lectureId]};
  color: black;
  display: flex;
  flex-direction: row;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  text-shadow: -1px 1px 3px rgba(0, 0, 0, 0.3);
  color: white;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;

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
    LightenDarkenColor(LectureColors[props.lectureId], -10)};
  position: relative;
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

const renderEvent = (event, defaultAttributes, styles) => {
  defaultAttributes.className = "";
  return (
    <StyledLectureWrapper
      {...defaultAttributes}
      title={event.name}
      key={event.id}
    >
      <StyledLecture lectureId={event.lectureId} type={event.type}>
        <StyledLectureBody>
          <div style={{ fontWeight: `bold` }}>{event.name}</div>
          <SmallField>{event.professor}</SmallField>
          <SmallField>{event.class}</SmallField>
          <SmallField>
            {event.startTime.format("HH:mm")} - {event.endTime.format("HH:mm")}
          </SmallField>
        </StyledLectureBody>
        <StyledLectureType type={event.type} lectureId={event.lectureId}>
          {event.type}
        </StyledLectureType>
      </StyledLecture>
    </StyledLectureWrapper>
  );
};

export default ({ timeInterval, tableData }) => (
  <Timetable
    hoursInterval={timeInterval}
    renderEvent={renderEvent}
    events={tableData}
  />
);
