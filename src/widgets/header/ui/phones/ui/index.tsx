import { useMemo } from "react";
import { $companyInfo } from "@shared/api/companyInfo";
import { formatPhoneNumber } from "@shared/lib/helpers/formatPhoneNumber";
import { useUnit } from "effector-react";
import { Skeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

export const Phones = () => {
  const { data, loading, error } = useUnit($companyInfo.store);

  const mainPhone = useMemo(() => {
    if (data) {
      const primaryPhone = data.phones.find((phone) => phone.primary);

      return primaryPhone || data.phones;
    }

    return null;
  }, [data]);

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

  if (!mainPhone) {
    return null;
  }

  return (
    <div className={cls.phones}>
      {Array.isArray(mainPhone) ? (
        data.phones.map((phone) => (
          <a href={`tel:${formatPhoneNumber(phone.name)}`} key={phone.id}>
            {phone.name}
          </a>
        ))
      ) : (
        <a href={`tel:${formatPhoneNumber(mainPhone.name)}`}>
          {mainPhone.name}
        </a>
      )}
    </div>
  );
};
