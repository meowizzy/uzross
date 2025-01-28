import { Suspense } from "react";
import { PageLoader } from "@app/appLayout/ui/pageLoader";
import { routeConfig } from "@shared/config/routes";
import { NavigateFunction, Route, Routes, useNavigate } from "react-router-dom";

export let routerNavigate: NavigateFunction;

export const AppRouter = () => {
  const navigate = useNavigate();

  routerNavigate = navigate;

  return (
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
  );
};
