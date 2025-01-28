import { type RouteProps } from "react-router-dom";
import HomePageAsync from "../../../pages/home";
import NewsPageAsync from "../../../pages/news";
import NewsDetailsAsync from "../../../pages/newsDetails";
import NotFoundPageAsync from "../../../pages/notFound";
import ProductsPageAsync from "../../../pages/products";
import ProductsDetailsAsync from "../../../pages/productsDetails";
import ServicesPageAsync from "../../../pages/services";

export enum AppRoutes {
  HOME = "HOME",
  ABOUT = "ABOUT",
  PRODUCTS = "PRODUCTS",
  PRODUCTS_DETAILS = "PRODUCTS_DETAILS",
  PRODUCTS_DETAILS_VENDOR = "PRODUCTS_DETAILS_VENDOR",
  SERVICES = "SERVICES",
  NEWS = "NEWS",
  NEWS_DETAILS = "NEWS_DETAILS",
  CONTACTS = "CONTACTS",
  NOT_FOUND = "NOT_FOUND",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PRODUCTS]: "/products",
  [AppRoutes.PRODUCTS_DETAILS]: "/products/details/",
  [AppRoutes.PRODUCTS_DETAILS_VENDOR]: "/products/details/vendor/",
  [AppRoutes.SERVICES]: "/services",
  [AppRoutes.NEWS]: "/news",
  [AppRoutes.NEWS_DETAILS]: "/news/details/",
  [AppRoutes.CONTACTS]: "/contacts",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePaths.HOME,
    element: <HomePageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePaths.ABOUT,
    element: <HomePageAsync />,
  },
  [AppRoutes.CONTACTS]: {
    path: RoutePaths.CONTACTS,
    element: <HomePageAsync />,
  },
  [AppRoutes.NEWS]: {
    path: RoutePaths.NEWS,
    element: <NewsPageAsync />,
  },
  [AppRoutes.NEWS_DETAILS]: {
    path: RoutePaths.NEWS_DETAILS + ":id",
    element: <NewsDetailsAsync />,
  },
  [AppRoutes.PRODUCTS]: {
    path: RoutePaths.PRODUCTS,
    element: <ProductsPageAsync />,
  },
  [AppRoutes.PRODUCTS_DETAILS]: {
    path: RoutePaths.PRODUCTS_DETAILS + ":id",
    element: <ProductsDetailsAsync />,
  },
  [AppRoutes.PRODUCTS_DETAILS_VENDOR]: {
    path: RoutePaths.PRODUCTS_DETAILS_VENDOR + ":id",
    element: <ProductsDetailsAsync />,
  },
  [AppRoutes.SERVICES]: {
    path: RoutePaths.SERVICES,
    element: <ServicesPageAsync />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.NOT_FOUND,
    element: <NotFoundPageAsync />,
  },
};
