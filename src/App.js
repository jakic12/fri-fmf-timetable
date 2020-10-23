import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HiDownload } from "react-icons/hi";
import round from "lodash/round";

import { fetchTableData } from "./util/api.js";
import {
  apiToTimetableData,
  downloadIcs,
  getTimeRange,
} from "./util/tableDataUtil.js";

// components
import LoadingScreen from "./components/LoadingScreen.jsx";
import FullscreenError from "./components/FullscreenError.jsx";
import CustomTimetable from "./components/CustomTimetable.jsx";

const Wrapper = styled.div`
  background: #34495d;
  color: white;
`;

const SettingsButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  height: ${(props) => props.rowHeight}vh;
  width: ${(props) => props.rowHeight}vh;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const getRowHeight = (timeInterval) => {
  let numberOfRows = timeInterval[1] - timeInterval[0] + 1;
  return round(100 / numberOfRows, 5);
};

function App() {
  const [tableData, setTableData] = useState(false);
  const [error, setError] = useState(false);
  const [timetableData, setTimetableData] = useState(false);

  const [timeInterval, setTimeInterval] = useState([8, 20]);

  // fetch the data
  useEffect(() => {
    const fetchPromise = fetchTableData();

    fetchPromise.then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setTableData(data);
          setTimeInterval(getTimeRange(data));
        });
      } else {
        console.error(response);
        setError(response.status + ": " + response.statusText);
      }
    });

    fetchPromise.catch((e) => {
      setError(e);
    });
  }, []);

  const loaded = !!timetableData;

  // convert data to a format that Timetable can understand
  if (tableData && !error && !timetableData)
    setTimetableData(apiToTimetableData(tableData));

  return (
    <Wrapper>
      <SettingsButton
        onClick={() => {
          if (tableData) downloadIcs(tableData);
        }}
        rowHeight={getRowHeight(timeInterval)}
      >
        <HiDownload />
      </SettingsButton>
      <LoadingScreen
        error={error}
        loaded={loaded}
        rowHeight={getRowHeight(timeInterval)}
      />
      {error && <FullscreenError error={error} />}
      {loaded && (
        <CustomTimetable
          timeInterval={timeInterval}
          tableData={timetableData}
        />
      )}
    </Wrapper>
  );
}

export default App;
