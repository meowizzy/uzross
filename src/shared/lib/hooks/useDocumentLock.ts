import { useEffect } from "react";

const html = document.documentElement;
const scrollBarWidth = window.innerWidth - html.clientWidth;

export const useDocumentLocking = (open: boolean) => {
  useEffect(() => {
    if (open) {
      html.classList.add("locked");
      html.style.setProperty("--scrollBarWidth", `${scrollBarWidth}px`);
    } else {
      html.classList.remove("locked");
    }
  }, [open]);
};
