import { memo } from "react";
import { About } from "./about";
import { Banner } from "./banner";
import { CallbackSection } from "./callbackSection";
import { CustomersPartnersSection } from "./customersPartners";
import { News } from "./news";
import { PatentsAndLicenses } from "./patentsAndLicenses";
import { Products } from "./products";
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
      <CallbackSection />
    </>
  );
};

export default memo(HomePage);
