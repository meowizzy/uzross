import { Spinner } from "@ui/spinner";
import cls from "./AppLayout.module.scss";

export const PageLoader = () => {
  return (
    <div className={cls.pageLoader}>
      <Spinner />
    </div>
  );
};
