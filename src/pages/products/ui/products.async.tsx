import { lazy } from "react";

const ProductsPageAsync = lazy(async () => import("./index"));

export default ProductsPageAsync;
