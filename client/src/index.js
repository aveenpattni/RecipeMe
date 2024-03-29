import { ThemeProvider } from "emotion-theming";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./templates/App";
import { configureStore } from "./config/store";
import "./styles/global.css";
import { theme } from "./styles/theme";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={configureStore()} >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
