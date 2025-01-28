import { TFunction } from "i18next";
import CountUp from "react-countup";
import cls from "./styles.module.scss";

export const Numbers = ({ t }: { t: TFunction<"home"> }) => {
  return (
    <div className={cls.bannerInfoBlock}>
      <div className={cls.bannerInfoBlockInner}>
        <div className={cls.bannerInfoBlockNumber}>
          <span className={cls.bannerInfoBlockNumberTitle}>
            <CountUp
              end={Number(t("banner.number_first.title"))}
              separator={" "}
              duration={5}
              redraw={false}
            />{" "}
            +
          </span>
          <span className={cls.bannerInfoBlockNumberText}>
            {t("banner.number_first.subtitle")}
          </span>
        </div>
        <div className={cls.bannerInfoBlockNumber}>
          <span className={cls.bannerInfoBlockNumberTitle}>
            <CountUp
              end={Number(t("banner.number_second.title"))}
              separator={" "}
              duration={2}
              redraw={false}
            />{" "}
            +
          </span>
          <span className={cls.bannerInfoBlockNumberText}>
            {t("banner.number_second.subtitle")}
          </span>
        </div>
      </div>
    </div>
  );
};
