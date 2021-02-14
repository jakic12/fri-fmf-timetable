import React from "react";

const colors = {
  default: {
    topBar: `#34495e`,
    sideBar: `#46596b`,
    backgroundColor: `white`,
    backgroundAccentColor: `rgba(0,0,0,.08)`,
    tableTextColor: `white`,
    cardTextColor: `white`,
    cardColors: {
      "red": "#e74c3c",
      "blue": "#3498db",
      "purple": "#9b59b6",
      "yellow": "#f1c40f",
      "green": "#2ecc71",
      "orange": "#e67e22"
    },
    cardBackground: "%COLOR%",
  },
  horror: {
    topBar: `red`,
    sideBar: `green`,
    backgroundColor: `yellow`,
    backgroundAccentColor: `gray`,
    tableTextColor: `black`,
    cardTextColor: `black`,
    cardColors: {
      "red": "#fff",
      "orange": "#701",
      "yellow": "#ab2",
      "green": "#aaa",
      "blue": "#faf",
      "purple": "#222"
	},
    cardBackground: "%COLOR%",
  },
  monokaiPro: {
    topBar: `#131313`,
    sideBar: `#191919`,
    backgroundColor: `#222222`,
    backgroundAccentColor: `#2c2c2d`,
    tableTextColor: `white`,
    cardTextColor: `white`,
    cardColors: {
      "red": "#ff6188",
      "orange": "#fc9868",
      "yellow": "#ffd866",
      "green": "#a9de77",
      "blue": "#78dce8",
      "purple": "#ab9df2"
	},
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
