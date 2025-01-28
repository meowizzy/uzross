import { lazy } from "react";

const ServicesPageAsync = lazy(async () => import("./index"));

export default ServicesPageAsync;
