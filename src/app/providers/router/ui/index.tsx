import { Suspense, useEffect } from "react";
import { PageLoader } from "@app/appLayout/ui/pageLoader";
import { routeConfig } from "@shared/config/routes";
import {
  NavigateFunction,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

export let routerNavigate: NavigateFunction;

export const AppRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  routerNavigate = navigate;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
