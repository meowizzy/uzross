import React from "react";
import { PostDetails, PostDetailsSkeleton } from "@entities/post";
import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import { Content } from "@widgets/content";

const About = () => {
  const { name, description, loading, groupedFiles, error } = useCompanyInfo();

  if (error) {
    return null;
  }

  return (
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
  );
};

export default About;
