import { Suspense } from "react";
import { PageLoader } from "@app/appLayout/ui/pageLoader";
import { routeConfig } from "@shared/config/routes";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
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
