import { lazy } from "react";

const ProductsDetailsAsync = lazy(async () => import("./index"));

export default ProductsDetailsAsync;
