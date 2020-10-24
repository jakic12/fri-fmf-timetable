# About
This is a timetable frontend for the [isrm time table api](https://github.com/plojyon/timetable_scraper)

Available at [https://jakic12.github.io/fri-fmf-timetable](https://jakic12.github.io/fri-fmf-timetable)

Also supports custom api addresses:
https://jakic12.github.io/fri-fmf-timetable?url=<api_url>

# Contributing

If you have a suggestion, you can upen up a new issue or submit a pull requrest.

## Color Schemes

All color schemes are saved in the [src/util/ColorSchemes.js](https://github.com/jakic12/fri-fmf-timetable/blob/master/src/util/colorSchemes.js) file.
A color scheme has to be in the following format:

```js
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
  cardBackground: "#191919",
  cardBorder: "2px solid %COLOR%", //optional,
  cardBorderRadius: `3px`, // optional
  cardTypeTextColor: `#222222`, // optional
},
```
All *card* properties (the ones that have *card* in the name), support the use of `%COLOR%`. Each card has its own color; if you want to use that color in your style, you have to use `%COLOR%`. For example if the color scheme is `monokaiPro`, the first card's color will be `#ff6188`. `cardBorder: "2px solid %COLOR%"` will then become `cardBorder: "2px solid #ff6188"`.  
You can also base a color scheme on another, you can import it and change some of the properties:
```js
parentScheme: {
  importStyle: `default`,
  cardBackground: `black`,
},

childScheme: {
  importStyle: `parentScheme`,
  cardBackground: `red`,
  cardTypeTextColor: `#000`,
},
```
The child color scheme will overwrite all of the parent styles, so for example `cardBackground` will be `red` in the end.
