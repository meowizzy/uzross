import { memo } from "react";
import { Banner } from "./banner";
import { CallbackSection } from "./callbackSection";
import { News } from "./news";

const HomePage = () => {
  return (
    <>
      <Banner />
      {/*<Section title={"Biz haqimizda"} theme={"dark"}></Section>*/}
      {/*<Section></Section>*/}
      {/*<Section title={"Sertifikatlar va patentlar"} theme={"dark"}></Section>*/}
      {/*<Section title={"Mahsulotlarimiz"}></Section>*/}
      {/*<Section title={"Xizmatlar"} theme={"dark"}></Section>*/}
      <News />
      <CallbackSection />
    </>
  );
};

export default memo(HomePage);
