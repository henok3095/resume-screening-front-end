import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux"; // Import Redux Provider
import {store} from "./api/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {" "}
      {/* Wrap your App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </Provider>
);
