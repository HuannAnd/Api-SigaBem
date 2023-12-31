import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Providers from "./contexts/Providers.jsx";
import "leaflet/dist/leaflet.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
