import React from "react";
import { Footer } from "@widgets/footer";
import { Header } from "@widgets/header";
import cls from "./AppLayout.module.scss";

type PropsType = {
  children: React.ReactNode;
};

export const AppLayout = (props: PropsType) => {
  const { children } = props;

  return (
    <div className={cls.appLayout}>
      <Header />
      <main className={cls.main}>{children}</main>
      <Footer />
    </div>
  );
};
