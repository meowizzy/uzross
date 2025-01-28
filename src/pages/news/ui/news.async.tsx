import { lazy } from "react";

const NewsPageAsync = lazy(async () => import("./index"));

export default NewsPageAsync;
