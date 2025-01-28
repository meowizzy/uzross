import { LanguageSwitcher } from "@app/i18n";
import { Navigation } from "@widgets/header/ui/navigation/ui";
import { Logo } from "@ui/logo";
import { Phones } from "../phones";
import cls from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.headerLeftSide}>
          <Logo />
        </div>
        <div className={cls.headerRightSide}>
          <Phones />
          <LanguageSwitcher />
          <Navigation />
        </div>
      </div>
    </header>
  );
};
