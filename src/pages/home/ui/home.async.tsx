import { lazy } from "react";

const HomePageAsync = lazy(async () => import("./index"));

export default HomePageAsync;
