import { useRef, useEffect, RefObject } from "react";

type ClickOutsideHandlerType = (flag: boolean) => void;

export const useClickOutside = <
  T extends HTMLElement,
  S extends HTMLElement = null,
>(
  handler: ClickOutsideHandlerType,
) => {
  const ref = useRef<T>(null);
  const buttonRef = useRef<S>(null);

  useEffect(() => {
    if (!ref) return;

    const handleClick = (event: MouseEvent) => {
      if (
        !ref.current.contains(event.target as HTMLElement) &&
        !(
          buttonRef.current &&
          buttonRef.current.contains(event.target as HTMLElement)
        )
      ) {
        handler(false);
      }
    };

    document.addEventListener("mouseup", handleClick);
    return () => document.removeEventListener("mouseup", handleClick);
  }, [handler]);

  return {
    ref,
    buttonRef,
  };
};
