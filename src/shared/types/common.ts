export type ContactsType = {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
    code: string;
  };
  primary: boolean;
};

export type NameCodeType<N = string, C = string> = {
  name: N;
  code: C;
};
