import React from "react";
import ReactDOM from "react-dom";
<<<<<<< Updated upstream
import { BrowserRouter } from 'react-router-dom';
=======
import { HashRouter } from "react-router-dom";

>>>>>>> Stashed changes
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
<<<<<<< Updated upstream
  <BrowserRouter>
    <App />
  </BrowserRouter>,
=======
  <HashRouter>
    <App />
  </HashRouter>,
>>>>>>> Stashed changes
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
