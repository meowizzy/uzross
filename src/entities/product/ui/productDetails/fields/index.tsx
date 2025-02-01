import { RefObject, useMemo } from "react";
import { Section } from "@ui/section";
import { VendorProductFieldsItemModel } from "../../../model/types/vendorProductFields";
import cls from "../styles.module.scss";

type PropsType = {
  data: Array<VendorProductFieldsItemModel>;
  ref?: RefObject<HTMLDivElement>;
};

export const ProductFields = (props: PropsType) => {
  const { data, ...restProps } = props;

  const filteredData = useMemo(() => {
    if (data) {
      const mainFields = data.find((field) => field.main);
      const newData = data.filter((field) => !field.main);

      return [mainFields, ...newData];
    }

    return [];
  }, [data]);

  return (
    <div className={cls.fields} {...restProps}>
      {filteredData?.map((item) => (
        <Section
          className={cls.fieldsGroup}
          key={item.id}
          title={item.name}
          size={"lg"}
          paddings={false}
        >
          <ul className={cls.fieldsList}>
            {item.fields.map(({ field, value }) => (
              <li className={cls.fieldRow} key={field.id}>
                <div className={cls.fieldLabel}>
                  <span>{field.name}:</span>
                </div>
                <div className={cls.fieldValue}>
                  <span>{value.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </div>
  );
};
