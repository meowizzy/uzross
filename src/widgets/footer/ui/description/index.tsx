import { Skeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

type PropsType = {
  description: string;
  loading?: boolean;
  error?: boolean;
};

export const Description = (props: PropsType) => {
  const { description, loading, error } = props;

  if (loading) {
    const height = "10px";
    const theme = "darken";

    return (
      <div className={cls.skeletonWrapper}>
        <Skeleton
          width={"100%"}
          height={height}
          theme={theme}
          borderRadius={"var(--radius-lg)"}
        />
        <Skeleton
          width={"90%"}
          height={height}
          borderRadius={"var(--radius-lg)"}
          theme={theme}
        />
        <Skeleton
          width={"60%"}
          height={height}
          borderRadius={"var(--radius-lg)"}
          theme={theme}
        />
        <Skeleton
          width={"70%"}
          height={height}
          borderRadius={"var(--radius-lg)"}
          theme={theme}
        />
        <Skeleton
          width={"40%"}
          height={height}
          borderRadius={"var(--radius-lg)"}
          theme={theme}
        />
      </div>
    );
  }

  if (!description || error) {
    return null;
  }

  return <p className={cls.description}>{description}</p>;
};
