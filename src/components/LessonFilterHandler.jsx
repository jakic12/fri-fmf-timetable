import React, { useState } from "react";

export const LessonFilterManager = React.createContext({
  setLessonFilter: () => console.log("context not loaded yet"),
  setSelecting: () => console.log("context not loaded yet"),
});

export const LessonFilterData = React.createContext({
  filter: {},
  selecting: false,
});

const filterObjKey = (obj, prop) =>
  Object.keys(obj).reduce((object, key) => {
    if (key !== prop) {
      object[key] = obj[key];
    }
    return object;
  }, {});

export default ({ Component }) => {
  const [filter, setFilter] = useState(
    JSON.parse(localStorage.getItem("lessonFilter") || "{}")
  );
  const [selecting, setSelecting] = useState(false);

  console.log("filter", filter);
  return (
    <LessonFilterData.Provider
      value={{
        filter,
        selecting,
      }}
    >
      <LessonFilterManager.Provider
        value={{
          setLessonFilter: (newFilter) => {
            const new1 = Object.assign({}, filter, newFilter);
            localStorage.setItem("lessonFilter", JSON.stringify(new1));
            setFilter(new1);
          },
          setSelecting: (n) => {
            //setFilter(filterObjKey(filter, n));
            setSelecting(n);
          },
        }}
      >
        <Component lessonFilter={filter} />
      </LessonFilterManager.Provider>
    </LessonFilterData.Provider>
  );
};
