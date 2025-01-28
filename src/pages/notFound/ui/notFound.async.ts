import { lazy } from "react";

const NotFoundPageAsync = lazy(async () => import("./index"));

export default NotFoundPageAsync;
