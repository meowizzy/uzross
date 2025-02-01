import { memo } from "react";
import { About } from "./about";
import { Banner } from "./banner";
import { CustomersPartnersSection } from "./customersPartners";
import { News } from "./news";
import { PatentsAndLicenses } from "./patentsAndLicenses";
import { Products } from "./products";
import { Requisition } from "./requisition";
import { Services } from "./services";

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <CustomersPartnersSection />
      <PatentsAndLicenses />
      <Products />
      <Services />
      <News />
      <Requisition />
    </>
  );
};

export default memo(HomePage);
