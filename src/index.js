import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import ApolloProviderComponent from "./apollo/ApolloProviderComponent";

import "font-awesome/css/font-awesome.css";
import "./index.css";

ReactDOM.render(
  <ApolloProviderComponent>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProviderComponent>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
