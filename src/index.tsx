import { App } from "@app/";
import "@app/i18n/config/i18n";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@app/styles/index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
