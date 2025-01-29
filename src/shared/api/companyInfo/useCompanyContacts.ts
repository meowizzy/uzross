import { useMemo } from "react";
import { CompanySocials, SocialsType } from "@shared/api/companyInfo/model";
import { $companyInfo } from "@shared/api/companyInfo/services";
import { useUnit } from "effector-react";

type FilteredSocials = Record<SocialsType, CompanySocials>;

export const useCompanyInfo = () => {
  const { data, loading, error } = useUnit($companyInfo.store);
  const phones = data?.phones;
  const name = data?.name;
  const emails = data?.emails;
  const socials = data?.socialAddresses;
  const description = data?.description;
  const address = data?.address;
  const files = data?.files;

  const filteredSocials: FilteredSocials = useMemo(() => {
    return socials?.reduce((acc, curr) => {
      acc[curr.type.name.toLowerCase() as SocialsType] = curr;

      return acc;
    }, {} as FilteredSocials);
  }, [socials]);

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
    socials,
    emails,
    loading,
    error,
    description,
    address,
    files,
    filteredSocials,
  };
};
