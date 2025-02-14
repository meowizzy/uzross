import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import { RoutePaths } from "@shared/config/routes";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@ui/button";
import { Image } from "@ui/image";
import { Section } from "@ui/section";
import BadgeIcon from "@assets/svg/badge.svg";
import { AboutSkeleton } from "./about.skeleton";
import cls from "./styles.module.scss";

export const About = () => {
  const { t: tHome } = useTranslation("home");
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { description, chars, groupedFiles, loading, error } = useCompanyInfo();

  const renderContent = () => {
    if (loading) {
      return <AboutSkeleton />;
    }

    return (
      <div className={cls.wrapper}>
        <div className={cls.left}>
          {!!description && (
            <div className={cls.description}>{description}</div>
          )}
          {!!chars?.length && (
            <ul className={cls.list}>
              {chars.map((char) => (
                <li key={char.id} className={cls.listItem}>
                  <BadgeIcon className={cls.listItemIcon} />
                  <div className={cls.listText}>
                    <span className={cls.label}>{char.title}</span>
                    <span className={cls.value}>{char.subTitle}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <Button onClick={() => navigate(RoutePaths.ABOUT)}>
            {t("buttons.viewMore")}
          </Button>
        </div>
        {!!groupedFiles.secondary && (
          <div className={cls.right}>
            <div className={cls.pic}>
              <Image
                src={groupedFiles.secondary}
                alt={tHome("sections.about")}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  if (error || (!description && !groupedFiles && !chars)) {
    return null;
  }

  return (
    <Section theme={"dark"} title={tHome("sections.about")}>
      {renderContent()}
    </Section>
  );
};
