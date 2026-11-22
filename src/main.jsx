import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://f042b97be5a35fecb64620a17828dbc6@o4512473208782848.ingest.us.sentry.io/4512473239715840",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
