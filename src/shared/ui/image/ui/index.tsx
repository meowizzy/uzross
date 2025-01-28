import { memo } from "react";
import NoImageIcon from "@assets/svg/noImage.svg";

type PropsType = {
  src?: string;
  alt?: string;
  className?: string;
};

export const Image = memo((props: PropsType) => {
  const { className, ...restProps } = props;

  if (props.src) {
    return <img className={className} {...restProps} />;
  }

  return <NoImageIcon className={className} />;
});
