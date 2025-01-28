import { Key, ReactNode } from "react";

export type TabsDataType = {
  key: Key;
  label: string;
  children: ReactNode;
};
