import React, { useState, useEffect } from "react";
import {PuffLoader} from "react-spinners";
import exportToLocal from "./exportToLocal.js";
import styled from "styled-components";
import moment from 'moment';
import "./App.css";
import { HiDownload } from 'react-icons/hi';

import Timetable from 'react-timetable-events'
import round from 'lodash/round'
import { LightenDarkenColor } from 'lighten-darken-color'; 


const LoadingDiv = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  position:absolute;
  align-items:center;
  justify-content:center;
  background:white;

  opacity:${props => props.loaded? 0 : 1};
  transition: all .6s ;
  transition-delay: .8s;

  z-index:1000;

  pointer-events:none;
`;

const SideLoading = styled.div`
  background:#46596b;
  width:${props => props.loaded? "5rem" : "100vw"};
  transition: all .4s cubic-bezier(.25,.8,.25,1);
  transition-delay: .4s;
  
  position:absolute;
  left:0;
  top:0;
  height:100vh;
  `;

const TopLoading = styled.div`
  background:#34495d;
  width:100vw;
  position:absolute;
  left:0;
  top:0;

  height:${props => props.loaded? `${getRowHeight()}vh` : "100vh"};
  transition: all .4s cubic-bezier(.25,.8,.25,1);
`;


const Wrapper = styled.div`
  background:#34495d;
  color:white;
`;

const LectureColors = [
  "#e74c3c",
  "#3498db",
  "#2ecc71",
  "#f1c40f",
  "#9b59b6",
  "#1abc9c",
  "#e67e22",
  "#34495e"
];

const StyledLecture = styled.div`
  width:100%;
  background:${props => LectureColors[props.lectureId]};
  color:black;
  display:flex;
  flex-direction:row;
  border-radius:2px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  text-shadow: -1px 1px 3px rgba(0, 0, 0, .3);
  color: white;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  overflow:hidden;

  margin:5px;

  &:hover{
    box-shadow: 0 10px 20px rgba(0,0,0,0.25), 0 6px 6px rgba(0,0,0,0.22);
    margin:3px;
  }
`;

const StyledLectureBody = styled.div`
  height:100%;
  width:80%;
  padding:10px;
`;

const StyledLectureType = styled.div`
  height:100%;
  width:20%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background: ${props => LightenDarkenColor(LectureColors[props.lectureId], -10)};
  position:relative;
`;

const StyledLectureWrapper = styled.div`
  //padding:5px;
  display:flex;
  position:absolute;
  box-sizing:border-box;
  width:100%;
`;

const SmallField = styled.div`
  font-size:.6em;
`;

const ErrorWrapper = styled.div`
  width:100vw;
  height:100vh;

  display:flex;
  justify-content:center;
  align-items:center;
`;

const ErrorCard = styled.div`
  background:#e74c3c;
  border-radius:2px;
  padding:10px;
`;
const padTo2 = (num) => ('00' + num).slice(-2) 

const SettingsButton = styled.div`
  position:absolute;
  right:0;
  top:0;

  height:${props => getRowHeight()}vh;
  width:${props => getRowHeight()}vh;
  z-index:900;
  display:flex;
  align-items:center;
  justify-content:center;

  &:hover{
    cursor:pointer;
  }
`;

const downloadIcs= (string) =>{
  const element = document.createElement("a");
   const file = new Blob([string],    
               {type: 'text/plain;charset=utf-8'});
   element.href = URL.createObjectURL(file);
   element.download = "calendar.ics";
   document.body.appendChild(element);
   element.click();
}

const renderEvent = (event, defaultAttributes, styles) => {
  defaultAttributes.className = "";
  return (
    <StyledLectureWrapper {...defaultAttributes}
    title={event.name}
    key={event.id}>
      <StyledLecture lectureId={event.lectureId} type={event.type} >
              <StyledLectureBody >
                <div style={{fontWeight:`bold`}}>{ event.name }</div>
                <SmallField>{event.professor}</SmallField>
                <SmallField>{event.class}</SmallField>
                <SmallField>
                  { event.startTime.format('HH:mm') } - { event.endTime.format('HH:mm') }
                </SmallField>
             </StyledLectureBody>
             <StyledLectureType type={event.type} lectureId={event.lectureId}>
               {event.type}
             </StyledLectureType>

      </StyledLecture>
    </StyledLectureWrapper>
  )
}

function App() {
  const [tableData, setTableData] = useState(false);
  const [error, setError] = useState(false);
  const url =
    window.location.href.indexOf("?url=") == -1
      ? "https://fmf-fri-timetable-scraper.herokuapp.com/getUrnik"
      : window.location.href.split("?url=")[1];

  useEffect(() => {
    const fetchPromise = fetch("https://cors-anywhere.herokuapp.com/" + url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: 'no-referrer',
    })
    
    fetchPromise.then(response => {
      if(response.ok){
        console.log("ok");
        response.json().then(data => {
            setTableData(data);
          })
      }else{
        console.log("not ok", response)
        setError(response.status + ": " + response.statusText)
      }
        
      })

    fetchPromise.catch(e => {
      setError(e);
    })
      
  }, [])

  const loaded = !!tableData;

  const tableDataConverted = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: []
    
  };

  const DAYS = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
  ]

  const elementCount = {};
  DAYS.forEach(d => elementCount[d] = 1);

  const lectures = [];
  if(loaded && !error) 
    tableData.forEach(el => {
      if(lectures.indexOf(el.predmet.abbr) == -1)
        lectures.push(el.predmet.abbr);

      tableDataConverted[DAYS[el.dan]].push({
        id:elementCount[DAYS[el.dan]]++,
        name:el.predmet.name,
        professor: el.profesor,
        class: el.ucilnica,
        type:el.tip,
        lectureId: lectures.indexOf(el.predmet.abbr),
        startTime:moment("2019-02-23T" + padTo2(el.ura) + ":00:00"),
        endTime:moment("2019-02-23T" + ('00' + padTo2(el.ura + el.trajanje)).slice(-2) + ":00:00")
      })
    })

  console.log(error);
    
  return <Wrapper>
    <SettingsButton onClick={() => {
      if(tableData)
        downloadIcs(exportToLocal(tableData))
    }}>
      <HiDownload />
    </SettingsButton>
    <LoadingDiv loaded={loaded || !!error}>
      <SideLoading loaded={loaded}></SideLoading>
      <TopLoading loaded={loaded}></TopLoading>
      <PuffLoader  />
    </LoadingDiv>
    {error && <ErrorWrapper>
      <ErrorCard>{error}</ErrorCard>
      </ErrorWrapper>}
    {loaded && <Timetable hoursInterval = {timeInterval} renderEvent={renderEvent} events={tableDataConverted}/>}
  </Wrapper>;
}
const timeInterval = [8, 20]

const getRowHeight = () => {
  let numberOfRows =
  timeInterval[1] - timeInterval[0] + 1

  return round((100 / numberOfRows), 5)
}

export default App;
