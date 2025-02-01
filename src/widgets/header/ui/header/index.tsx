import { LanguageSwitcher } from "@app/i18n";
import { NavigationMobile } from "@widgets/header/ui/navigation";
import { Navigation } from "@widgets/header/ui/navigation/ui";
import { useDeviceDetect } from "@hooks/useDeviceDetect";
import { Logo } from "@ui/logo";
import { Phones } from "../phones";
import cls from "./styles.module.scss";

export const Header = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.headerLeftSide}>
          <Logo />
        </div>
        <div className={cls.headerRightSide}>
          {!isMobile && <Phones />}
          <LanguageSwitcher />
          {isMobile ? <NavigationMobile /> : <Navigation />}
        </div>
      </div>
    </header>
  );
};
