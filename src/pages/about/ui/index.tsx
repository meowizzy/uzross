import React from "react";
import { PostDetails, PostDetailsSkeleton } from "@entities/post";
import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import { Content } from "@widgets/content";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const About = () => {
  const { name, description, loading, groupedFiles, error } = useCompanyInfo();
  const { t } = useTranslation();

  if (error) {
    return null;
  }

  return (
    <>
      <Helmet title={`${t("menuList.about")} | UzRoss`} />
      <Content>
        {loading ? (
          <PostDetailsSkeleton />
        ) : (
          <PostDetails
            titlePosition={"center"}
            data={{
              title: name,
              description,
              filePath: groupedFiles.tertiary,
            }}
          />
        )}
      </Content>
    </>
  );
};

export default About;
