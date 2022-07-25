import { CssVarsProvider } from "@mui/joy";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider>
        <App />
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>
);
