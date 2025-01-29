import { lazy } from "react";

const AboutAsync = lazy(async () => import("./index"));

export default AboutAsync;
