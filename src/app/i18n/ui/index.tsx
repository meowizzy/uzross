import { memo, useState } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useClickOutside } from "@hooks/useClickOutside";
import { Button } from "@ui/button";
import ArrowDownIcon from "@assets/svg/arrowDown.svg";
import { E_LANGUAGES } from "../types";
import cls from "./LanguageSwitcher.module.scss";

type PropsType = {
  className?: string;
};

type LanguageOptionType = {
  shortName: string;
  name: string;
};

export const languages: Record<E_LANGUAGES, LanguageOptionType> = {
  [E_LANGUAGES.ru]: {
    shortName: "Ру",
    name: "Русский",
  },
  [E_LANGUAGES.uz]: {
    shortName: "O’z",
    name: "O’zbek",
  },
  [E_LANGUAGES.en]: {
    shortName: "En",
    name: "English",
  },
};

export const LanguageSwitcher = memo((props: PropsType) => {
  const { className } = props;
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { ref } = useClickOutside<HTMLDivElement>(setDropDownOpen);

  const { i18n } = useTranslation();

  const classesCompose = cn(cls.langSwitcher, className, {
    [cls.opened]: dropDownOpen,
  });

  const onClickChangeLanguage = async (lang: E_LANGUAGES) => {
    await i18n.changeLanguage(lang);
    setDropDownOpen(false);
    window.location.reload();
  };

  const onClickToggleDropDown = () => {
    setDropDownOpen((prev) => !prev);
  };

  return (
    <div className={classesCompose} ref={ref}>
      <Button
        icon={<ArrowDownIcon />}
        theme="clear"
        onClick={onClickToggleDropDown}
        className={cls.langSwitcherOpener}
      >
        {languages[i18n.language as E_LANGUAGES].shortName}
      </Button>
      <div className={cls.langSwitcherDropDown}>
        {Object.entries(languages).map(
          ([key, value]: [E_LANGUAGES, LanguageOptionType]) => (
            <Button
              theme="clear"
              key={key}
              onClick={() => onClickChangeLanguage(key)}
              className={cn(cls.langSwitcherOption, {
                [cls.langSwitcherOptionSelected]: i18n.language === key,
              })}
            >
              {value.name}
            </Button>
          ),
        )}
      </div>
    </div>
  );
});
