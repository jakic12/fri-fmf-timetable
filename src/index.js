import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ColorSchemeHandler from "./components/ColorSchemeHandler";
import LessonFilterHandler from "./components/LessonFilterHandler";

ReactDOM.render(
  <React.StrictMode>
    <LessonFilterHandler
      Component={(props) => <ColorSchemeHandler {...props} Component={App} />}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
