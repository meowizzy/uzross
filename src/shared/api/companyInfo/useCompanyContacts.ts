import { useMemo } from "react";
import { $companyInfo } from "@shared/api/companyInfo/services";
import { useUnit } from "effector-react";

export const useCompanyInfo = () => {
  const { data, loading, error } = useUnit($companyInfo.store);
  const phones = data?.phones;
  const name = data?.name;
  const emails = data?.emails;
  const socials = data?.socialAddresses;
  const description = data?.description;
  const address = data?.address;
  const files = data?.files;

  const links = useMemo(() => {
    if (!emails && !socials) {
      return null;
    }

    return [...emails, ...socials];
  }, [emails, socials]);

  return {
    name,
    links,
    phones,
    loading,
    error,
    description,
    address,
    files,
  };
};
