import { memo } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { About } from "./about";
import { Banner } from "./banner";
import { CustomersPartnersSection } from "./customersPartners";
import { News } from "./news";
import { PatentsAndLicenses } from "./patentsAndLicenses";
import { Products } from "./products";
import { Requisition } from "./requisition";
import { Services } from "./services";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={`${t("menuList.home")} | UzRoss`} />
      <Banner />
      <About />
      <CustomersPartnersSection />
      <PatentsAndLicenses />
      <Products />
      <News />
      <Services />
      <Requisition />
    </>
  );
};

export default memo(HomePage);
