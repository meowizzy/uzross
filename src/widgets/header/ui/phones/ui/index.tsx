import { $companyInfo } from "@shared/api/companyInfo";
import { formatPhoneNumber } from "@shared/lib/helpers/formatPhoneNumber";
import { useUnit } from "effector-react";
import { Skeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

export const Phones = () => {
  const { data, loading, error } = useUnit($companyInfo.store);

  if (loading) {
    return (
      <Skeleton
        theme={"dark"}
        width={"130px"}
        height={"18px"}
        borderRadius={"var(--radius-md)"}
      />
    );
  }

  if (error) {
    return null;
  }

  return (
    <div className={cls.phones}>
      {!!data?.phones.length &&
        data.phones.map((phone) => (
          <a href={`tel:${formatPhoneNumber(phone.name)}`}>{phone.name}</a>
        ))}
    </div>
  );
};
