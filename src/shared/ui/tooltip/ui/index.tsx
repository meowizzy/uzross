import { memo, ReactNode, useEffect, useRef, useState } from "react";
import { Title } from "@shared/ui/title";
import cn from "classnames";
import { Portal } from "@ui/portal";
import cls from "./styles.module.scss";

type PropsType = {
  title: string;
  children: ReactNode;
  className?: string;
};

export const Tooltip = memo((props: PropsType) => {
  const { children, title, className } = props;
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const onTitleMouseOver = () => {
    if (tooltipRef.current && titleRef.current) {
      const titleDimensions = titleRef.current.getBoundingClientRect();
      const tooltipDimensions = tooltipRef.current.getBoundingClientRect();

      tooltipRef.current.style.left = `${titleDimensions.left - tooltipDimensions.width / 2 + titleDimensions.width / 2}px`;
      tooltipRef.current.style.top = `${titleDimensions.top - tooltipDimensions.height - 10}px`;
    }
    setIsTooltipVisible(true);
  };

  const onTitleMouseLeave = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.cssText = ``;
    }
    setIsTooltipVisible(false);
  };

  return (
    <>
      <Title
        onMouseEnter={onTitleMouseOver}
        onMouseLeave={onTitleMouseLeave}
        size={"sm"}
        className={cn(cls.title, className)}
        ref={titleRef}
      >
        {title}
      </Title>
      <Portal>
        <div
          className={cn(cls.tooltip, {
            [cls.visible]: isTooltipVisible,
          })}
          ref={tooltipRef}
        >
          {children}
        </div>
      </Portal>
    </>
  );
});
