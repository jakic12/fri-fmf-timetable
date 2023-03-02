import React, { useState, useEffect } from "react";
import styled from "styled-components";
import round from "lodash/round";

import { fetchTableData } from "./util/api.js";
import {
  apiToTimetableData,
  downloadIcs,
  getTimeRange,
  findDuplicateLectures,
  filterApiData,
  markHiddenApiData,
} from "./util/tableDataUtil.js";

// components
import LoadingScreen from "./components/LoadingScreen.jsx";
import FullscreenError from "./components/FullscreenError.jsx";
import CustomTimetable from "./components/CustomTimetable.jsx";
import TopExpandableBar from "./components/TopExpandableBar.jsx";

import { ColorContext } from "./util/colorSchemes";
import {
  LessonFilterData,
  LessonFilterManager,
} from "./components/LessonFilterHandler";

// resources
import { HiDownload } from "react-icons/hi";

// google analytics
import ReactGA from "react-ga";

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

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * Idea stolen from: https://stackoverflow.com/a/55075818/1526448
 * @param {Function} effect
 * @param {Array<any>} dependencies
 */
function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = React.useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, dependencies);
}

const App = ({ lessonFilter }) => {
  const [tableDataAndInterval, setTableDataAndInterval] = useState();
  const [error, setError] = useState();
  const [timetableData, setTimetableData] = useState();
  const [duplicates, setDuplicates] = useState();
  const colors = React.useContext(ColorContext);
  const lessonFilterData = React.useContext(LessonFilterData);

  // fetch the data
  useEffect(() => {
    const fetchPromise = fetchTableData();

    fetchPromise.then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          const user = new URLSearchParams(window.location.search).get("user");
          if (user && data[user]) data = data[user];
          else data = data[Object.keys(data)[0]];
          setTableDataAndInterval({
            tableData: data,
            timeInterval: getTimeRange(data),
          });
          setDuplicates(findDuplicateLectures(data));
        });
      } else {
        console.error(response);
        setError(response.status + ": " + response.statusText);
      }
    });

    fetchPromise.catch((e) => {
      setError(e.toString());
    });

    ReactGA.initialize("G-48HEFNVSMF");
  }, []);

  const loaded = !!timetableData;

  useUpdateEffect(() => {
    console.log(lessonFilterData.selecting);
    //force update if lessonFilter has been updated
    const newData = apiToTimetableData(
      markHiddenApiData(
        tableDataAndInterval.tableData,
        lessonFilter,
        lessonFilterData.selecting
      )
    );

    if (newData) setTimetableData(newData);
    else setError("data calculation error");
  }, [lessonFilter, lessonFilterData.selecting]);

  // convert data to a format that Timetable can understand
  if (tableDataAndInterval && !error && !timetableData) {
    const newData = apiToTimetableData(
      filterApiData(tableDataAndInterval.tableData, lessonFilter)
    );
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
            //lessonFilter={lessonFilter}
            timeInterval={tableDataAndInterval.timeInterval}
            tableData={timetableData}
          />
          <TopExpandableBar
            duplicateLectures={duplicates}
            rowHeight={getRowHeight(tableDataAndInterval.timeInterval)}
            buttons={topButtons}
          />
        </>
      )}
    </Wrapper>
  );
};

export default App;
