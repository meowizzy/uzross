import { useEffect } from "react";
import { App } from "@app/";
import "@app/i18n/config/i18n";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { useDeviceDetect } from "@hooks/useDeviceDetect";
import "@app/styles/index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

const setContainerMaxWidth = () => {
  document.documentElement.style.setProperty(
    "--container-max-width",
    `${window.innerWidth}px`,
  );
};

const AppRoot = () => {
  const { isTablet } = useDeviceDetect();

  useEffect(() => {
    if (isTablet) {
      setContainerMaxWidth();

      window.addEventListener("resize", () => setContainerMaxWidth());
    }
  }, []);

  return <App />;
};

root.render(
  <BrowserRouter>
    <AppRoot />
  </BrowserRouter>,
);
