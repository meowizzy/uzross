import { RefObject, useEffect, useRef, useState } from "react";

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

type UseIntersectionReturnType<T> = [ref: RefObject<T>, isVisible: boolean];

export const useIntersection = <
  T extends HTMLElement,
>(): UseIntersectionReturnType<T> => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);
    const current = ref.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
    };
  }, [ref]);

  return [ref, isVisible];
};
