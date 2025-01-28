import { useLayoutEffect } from "react";
import { AppLayout } from "@app/appLayout";
import { $companyInfo } from "@shared/api/companyInfo";
import { useUnit } from "effector-react";
import { AppRouter } from "@providers/router";

export const App = () => {
  const companyInfoState = useUnit($companyInfo.store);

  useLayoutEffect(() => {
    if (!companyInfoState.data) {
      $companyInfo.effect();
    }
  }, []);

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
};
