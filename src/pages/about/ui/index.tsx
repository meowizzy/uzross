import React from "react";
import { PostDetails, PostDetailsSkeleton } from "@entities/post";
import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import { Content } from "@widgets/content";

const About = () => {
  const { name, description, loading, files, error } = useCompanyInfo();

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
            filePath:
              files.length && files.find((file) => !file.main)?.filePath,
          }}
        />
      )}
    </Content>
  );
};

export default About;
