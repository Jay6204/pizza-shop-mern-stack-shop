import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

// Use createRoot instead of ReactDOM.render
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


