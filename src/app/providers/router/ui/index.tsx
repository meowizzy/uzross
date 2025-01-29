import { Suspense, useEffect, useState } from "react";
import { PageLoader } from "@app/appLayout/ui/pageLoader";
import { routeConfig } from "@shared/config/routes";
import { Route, Routes, useLocation, useNavigation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

export const AppRouter = () => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location.pathname);
    setProgress(true);
    if (location.pathname === prevLoc) {
      setPrevLoc("");
    }
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  TopBarProgress.config({
    barColors: {
      "0": "#24aadb",
    },
    shadowBlur: 0,
    barThickness: 3,
  });

  return (
    <>
      {progress && <TopBarProgress />}
      <Routes>
        {Object.entries(routeConfig).map(([key, route]) => (
          <Route
            key={key}
            path={route.path}
            element={
              <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
            }
          />
        ))}
      </Routes>
    </>
  );
};
