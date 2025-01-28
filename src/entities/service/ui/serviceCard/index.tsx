import { Image } from "@ui/image";
import cls from "./styles.module.scss";

type PropsType = {
  title: string;
  imagePath: string;
  description?: string;
};

export const ServiceCard = (props: PropsType) => {
  const { title, imagePath, description } = props;

  return (
    <div className={cls.serviceCard}>
      <div className={cls.serviceCardPic}>
        <Image src={imagePath} />
      </div>
      <div className={cls.serviceCardTitle}>
        <span>{title}</span>
      </div>
      {!!description && (
        <div className={cls.serviceCardDescription}>{description}</div>
      )}
    </div>
  );
};
