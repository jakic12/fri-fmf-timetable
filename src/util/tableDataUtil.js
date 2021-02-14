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
      color: el.predmet.color,
      class: el.ucilnica,
      type: el.tip,
      lectureId: lectures.indexOf(el.predmet.abbr),
      startTime: moment("2019-02-23T" + padTo2(el.ura) + ":00:00"),
      endTime: moment(
        "2019-02-23T" +
          ("00" + padTo2(el.ura + el.trajanje)).slice(-2) +
          ":00:00"
      ),
      hidden: el.hidden,
      abbr: el.predmet.abbr,
      dan: el.dan,
      ura: el.ura,
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

export const concatAbbrAndType = (predmet, delimiter = "$") => {
  return (
    predmet.predmet.abbr +
    delimiter +
    (predmet.tip.toUpperCase().indexOf("V") == -1 ? "P" : "V")
  );
};

export const isPredmetEqualToIDString = (predmet, string) => {
  const [predmetName, predmetType] = string.split("$");
  return (
    predmetName === predmet.predmet.abbr &&
    (predmet.tip || predmet.type).indexOf(predmetType) != -1
  );
};

//Should have used: https://www.youtube.com/watch?v=pKO9UjSeLew
export const findDuplicateLectures = (apiDataTable) => {
  const countByVajeLecture = {};
  apiDataTable.forEach((element) => {
    const predmetID = concatAbbrAndType(element);
    if (predmetID in countByVajeLecture) {
      if (
        countByVajeLecture[predmetID].filter(
          (e) => e.dan === element.dan && e.ura === element.ura
        ).length === 0
      ) {
        countByVajeLecture[predmetID].push(element);
      }
    } else {
      countByVajeLecture[predmetID] = [element];
    }
  });

  const duplicateLectures = Object.keys(countByVajeLecture)
    .map((key) => {
      if (countByVajeLecture[key].length > 1) {
        return key;
      } else {
        return 0;
      }
    })
    .filter((e) => e != 0);

  return duplicateLectures;
};

export const isInFilter = (lessonFilter, predmet) => {
  return (
    !lessonFilter[concatAbbrAndType(predmet)] ||
    (lessonFilter[concatAbbrAndType(predmet)].dan === predmet.dan &&
      lessonFilter[concatAbbrAndType(predmet)].ura === predmet.ura)
  );
};

export const filterApiData = (apiData, lessonFilter, flip = false) =>
  /*apiData.filter((e) => {
    const out = flip ^ isInFilter(lessonFilter, e);
    console.log(e, out);
    return out;
  });*/
  markHiddenApiData(apiData, lessonFilter, false);

export const markHiddenApiData = (apiData, lessonFilter, selecting) =>
  apiData.map((e) => {
    const show =
      (selecting &&
        isPredmetEqualToIDString(e, selecting) &&
        ((lessonFilter[selecting] || []).length == 0 ||
          isInFilter(lessonFilter, e))) ||
      (!selecting &&
        (isInFilter(lessonFilter, e) || !lessonFilter[concatAbbrAndType(e)]));

    return Object.assign(e, {
      hidden: !show,
    });
  });
