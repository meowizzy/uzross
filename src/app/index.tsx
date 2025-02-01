import { useEffect, useLayoutEffect } from "react";
import { AppLayout } from "@app/appLayout";
import { $companyInfo } from "@shared/api/companyInfo";
import { dayjsSetup } from "@shared/lib/dayjs";
import { UpButton } from "@widgets/upButton";
import { useUnit } from "effector-react";
import { useLocation } from "react-router-dom";
import { AppRouter } from "@providers/router";

export const App = () => {
  const location = useLocation();

  dayjsSetup();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const companyInfoState = useUnit($companyInfo.store);

  useLayoutEffect(() => {
    if (!companyInfoState.data) {
      $companyInfo.effect();
    }
  }, []);

  return (
    <AppLayout>
      <AppRouter />
      <UpButton />
    </AppLayout>
  );
};
