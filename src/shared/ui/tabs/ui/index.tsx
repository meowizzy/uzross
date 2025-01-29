import {
  FC,
  Key,
  memo,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import cn from "classnames";
import { Button } from "@ui/button";
import { TabsDataType } from "../types";
import cls from "./styles.module.scss";

type PropsType = {
  items: Array<TabsDataType>;
  className?: string;
  defaultKey?: Key;
  onChange?: (key: Key, currentTab: TabsDataType) => void;
  tabSize?: "sm" | "md" | "lg";
  suffix?: ReactNode;
  trigger?: boolean;
};

export const Tabs: FC<PropsType> = memo((props) => {
  const {
    items,
    defaultKey,
    className,
    onChange,
    trigger,
    tabSize = "md",
    suffix,
  } = props;
  const [currentKey, setCurrentKey] = useState<Key | undefined>(defaultKey);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const currentTab = useMemo(() => {
    let current;
    if (currentKey) {
      current = items.find((item) => item.key === currentKey);

      if (!current) {
        setCurrentKey(items[0].key);
      }
    }

    return current ? current : items[0];
  }, [items, currentKey]);

  useEffect(() => {
    if (trigger && triggerRef.current) {
      triggerRef.current.click();
    }
  }, [triggerRef, trigger]);

  const onClickTabChange = (key: Key, currentTab: TabsDataType) => {
    setCurrentKey(key);

    if (onChange) {
      onChange(key, currentTab);
    }
  };

  const renderSuffix = () => {
    if (suffix) {
      return <div className={cls.suffix}>{suffix}</div>;
    }

    return null;
  };

  return (
    <div className={cn(cls.tabs, className)}>
      <nav className={cn(cls.tabsNavigation)}>
        <ul className={cn(cls.tabsList)}>
          {items.map((item) => {
            const isCurrentTab = item.key === currentKey;

            return (
              <li
                key={item.key}
                className={cn(cls.tabsItem, isCurrentTab && "current")}
              >
                <Button
                  ref={item.key === currentKey ? triggerRef : null}
                  className={cls.tabButton}
                  theme={"clear"}
                  size={tabSize}
                  onClick={() => onClickTabChange(item.key, item)}
                >
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
        {renderSuffix()}
      </nav>
      <div className={cls.tabsContent} key={currentKey}>
        {currentTab.children}
      </div>
    </div>
  );
});
