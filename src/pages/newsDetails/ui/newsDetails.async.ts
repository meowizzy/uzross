import { lazy } from "react";

const NewsDetailsAsync = lazy(async () => import("./index"));

export default NewsDetailsAsync;
