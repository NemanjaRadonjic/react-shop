import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import store from "@store";

import "@styles/css-reset.scss";
import "@styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
