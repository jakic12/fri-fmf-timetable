import React from "react";

const colors = {
  default: {
    topBar: `#34495e`,
    sideBar: `#46596b`,
    backgroundColor: `white`,
    backgroundAccentColor: `rgba(0,0,0,.08)`,
    tableTextColor: `white`,
    cardTextColor: `white`,
    cardColors: [
      "#e74c3c",
      "#3498db",
      "#9b59b6",
      "#f1c40f",
      "#2ecc71",
      "#1abc9c",
      "#e67e22",
      "#34495e",
    ],
    cardBackground: "%COLOR%",
  },
  horror: {
    topBar: `red`,
    sideBar: `green`,
    backgroundColor: `yellow`,
    backgroundAccentColor: `gray`,
    tableTextColor: `black`,
    cardTextColor: `black`,
    cardColors: [
      "#fff",
      "#701",
      "#ab2",
      "#aaa",
      "#faf",
      "#222",
      "#deadbe",
      "#dadada",
    ],
    cardBackground: "%COLOR%",
  },
  monokaiPro: {
    topBar: `#131313`,
    sideBar: `#191919`,
    backgroundColor: `#222222`,
    backgroundAccentColor: `#2c2c2d`,
    tableTextColor: `white`,
    cardTextColor: `white`,
    cardColors: [
      "#ff6188",
      "#fc9868",
      "#ffd866",
      "#a9de77",
      "#78dce8",
      "#ab9df2",
      "#ad5ca3",
      "#34495e",
    ],
    cardBorder: "2px solid %COLOR%", //optional,  all color card props, support %COLOR% except cardColors
    cardBorderRadius: `3px`, // optional
    cardBackground: "#191919",
    cardTypeTextColor: `#222222`, // optional
  },
  monokaiProWithColorText: {
    importStyle: `monokaiPro`,
    cardTextColor: `%COLOR%`,
  },
  darkerMode: {
    topBar: `black`,
    sideBar: `black`,
    backgroundColor: `black`,
    backgroundAccentColor: `black`,
    tableTextColor: `#aaaaaa`,
    cardTextColor: `#aaaaaa`,
    cardColors: [],
    cardBackground: "black",
    cardTypeTextColor: `#aaaaaa`,
    cardTypeBackground: `black`,
  },
};

export default Object.assign(
  colors,
  JSON.parse(localStorage.getItem("customColorSchemes") || "{}")
);
export const ColorContext = React.createContext(colors.default);
