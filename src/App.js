import React, { useState, useEffect } from "react";
import styled from "styled-components";
import round from "lodash/round";

import { fetchTableData } from "./util/api.js";
import {
  apiToTimetableData,
  downloadIcs,
  getTimeRange,
  findDuplicateLectures,
} from "./util/tableDataUtil.js";

// components
import LoadingScreen from "./components/LoadingScreen.jsx";
import FullscreenError from "./components/FullscreenError.jsx";
import CustomTimetable from "./components/CustomTimetable.jsx";
import TopExpandableBar from "./components/TopExpandableBar.jsx";

import { ColorContext } from "./util/colorSchemes";

// resources
import { HiDownload } from "react-icons/hi";

//TOP BAR
const topButtons = [
  {
    name: "Download",
    icon: HiDownload,
    onClick: () => {
      //if (tableData) downloadIcs(tableData);
    },
  },
];
//TOP BAR

const Wrapper = styled.div`
  background: ${(props) => props.colors.backgroundColor};
  color: white;
`;

const getRowHeight = (timeInterval = [8, 20]) => {
  let numberOfRows = timeInterval[1] - timeInterval[0] + 1;
  return round(100 / numberOfRows, 5);
};

const App = () => {
  const [tableDataAndInterval, setTableDataAndInterval] = useState();
  const [error, setError] = useState();
  const [timetableData, setTimetableData] = useState();
  const colors = React.useContext(ColorContext);

  // fetch the data
  useEffect(() => {
    const fetchPromise = fetchTableData();

    fetchPromise.then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          findDuplicateLectures(data);
          setTableDataAndInterval({
            tableData: data,
            timeInterval: getTimeRange(data),
          });
        });
      } else {
        console.error(response);
        setError(response.status + ": " + response.statusText);
      }
    });

    fetchPromise.catch((e) => {
      setError(e.toString());
    });
  }, []);

  const loaded = !!timetableData;

  // convert data to a format that Timetable can understand
  if (tableDataAndInterval && !error && !timetableData) {
    const newData = apiToTimetableData(tableDataAndInterval.tableData);
    if (newData) setTimetableData(newData);
    else setError("data calculation error");
  }

  return (
    <Wrapper colors={colors}>
      <LoadingScreen
        error={error}
        loaded={loaded}
        rowHeight={getRowHeight(
          tableDataAndInterval ? tableDataAndInterval.timeInterval : [8, 20]
        )}
      />
      {error && <FullscreenError error={error} />}
      {tableDataAndInterval && (
        <>
          <CustomTimetable
            timeInterval={tableDataAndInterval.timeInterval}
            tableData={timetableData}
          />
          <TopExpandableBar
            rowHeight={getRowHeight(tableDataAndInterval.timeInterval)}
            buttons={topButtons}
          />
        </>
      )}
    </Wrapper>
  );
};

export default App;
