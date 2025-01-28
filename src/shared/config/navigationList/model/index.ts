import i18n from "@app/i18n/config/i18n";
import { RoutePaths } from "@shared/config/routes";

export interface NavigationListItemModel {
  path: string;
  name: string;
}

export const navigationList: Record<string, NavigationListItemModel> = {
  [RoutePaths.HOME]: {
    path: RoutePaths.HOME,
    name: "menuList.home",
  },
  [RoutePaths.ABOUT]: {
    path: RoutePaths.ABOUT,
    name: "menuList.about",
  },
  [RoutePaths.PRODUCTS]: {
    path: RoutePaths.PRODUCTS,
    name: "menuList.products",
  },
  [RoutePaths.SERVICES]: {
    path: RoutePaths.SERVICES,
    name: "menuList.services",
  },
  [RoutePaths.NEWS]: {
    path: RoutePaths.NEWS,
    name: "menuList.news",
  },
  [RoutePaths.CONTACTS]: {
    path: RoutePaths.CONTACTS,
    name: "menuList.contacts",
  },
};
