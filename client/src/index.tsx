import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";
import userService from "./services/userService";
import { setUser } from "@store/authSlice";
import axios from "axios";
import NiceModal from "@ebay/nice-modal-react";

axios.interceptors.request.use(
  (config: any) => {
    const {
      auth: { token },
    } = store.getState();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

if (store.getState().auth.token) {
  userService.getCurrentUserData().then((res) => {
    store.dispatch(
      setUser({ username: res.data.username, role: res.data.role })
    );
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NiceModal.Provider>
        <App />
      </NiceModal.Provider>
    </Provider>
  </React.StrictMode>
);
