import moment from "moment";
import exportToIcs from "./exportToIcs";

const padTo2 = (num) => ("00" + num).slice(-2);

/**
 * convert api data to a format that the Timetable component can understand
 * @param {Object} apiData object of data, that was fetched from the api
 */
export const apiToTimetableData = (apiData, compact) => {
  const tableDataConverted = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  };

  const DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday"];

  const elementCount = {};
  DAYS.forEach((d) => (elementCount[d] = 1));

  const lectures = [];
  apiData.forEach((el) => {
    if (lectures.indexOf(el.predmet.abbr) == -1) lectures.push(el.predmet.abbr);

    tableDataConverted[DAYS[el.dan]].push({
      id: elementCount[DAYS[el.dan]]++,
      name: compact ? el.predmet.abbr : el.predmet.name,
      professor: el.profesor,
      class: el.ucilnica,
      type: el.tip,
      lectureId: lectures.indexOf(el.predmet.abbr),
      startTime: moment("2019-02-23T" + padTo2(el.ura) + ":00:00"),
      endTime: moment(
        "2019-02-23T" +
          ("00" + padTo2(el.ura + el.trajanje)).slice(-2) +
          ":00:00"
      ),
    });
  });

  return tableDataConverted;
};

export const getTimeRange = (apiDataTable, smallestRange = [8, 20]) => {
  const range = [
    Math.min(smallestRange[0], apiDataTable[0].ura),
    Math.max(smallestRange[1], apiDataTable[0].ura + apiDataTable[0].trajanje),
  ];

  apiDataTable.forEach((el) => {
    if (el.ura < range[0]) {
      range[0] = el.ura;
    }

    if (el.ura + el.trajanje > range[1]) {
      range[1] = el.ura + el.trajanje;
    }
  });

  return range;
};

export const downloadIcs = (apiDataTable) => {
  const element = document.createElement("a");
  const file = new Blob([exportToIcs(apiDataTable)], {
    type: "text/plain;charset=utf-8",
  });
  element.href = URL.createObjectURL(file);
  element.download = "calendar.ics";
  document.body.appendChild(element);
  element.click();
};

//Should have used: https://www.youtube.com/watch?v=pKO9UjSeLew
export const findDuplicateLectures = (apiDataTable) => {
  const countByVajeLecture = {};
  apiDataTable.forEach((element) => {
    if (element.tip.toUpperCase().indexOf("V") != -1) {
      if (element.predmet.abbr in countByVajeLecture) {
        countByVajeLecture[element.predmet.abbr] += 1;
      } else {
        countByVajeLecture[element.predmet.abbr] = 1;
      }
    }
  });

  const duplicateLectures = Object.keys(countByVajeLecture)
    .map((key) => {
      if (countByVajeLecture[key] > 1) {
        return key;
      } else {
        return 0;
      }
    })
    .filter((e) => e != 0);

  console.log(duplicateLectures);
};
