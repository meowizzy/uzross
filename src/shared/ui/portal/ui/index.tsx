import { ReactNode } from "react";
import { createPortal } from "react-dom";

type PropsType = {
  children: ReactNode;
  element?: HTMLElement;
};

export const Portal = (props: PropsType) => {
  const { children, element = document.querySelector("#root") } = props;

  return createPortal(children, element);
};
