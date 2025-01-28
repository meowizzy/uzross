export type TWebpackMode = "development" | "production";

export type TWebpackPaths = {
  html: string;
  src: string;
  entry: string;
  build: string;
  public: string;
};

export type TWebpackEnv = {
  mode: TWebpackMode;
  port: number;
};

export type TWebpackOptions = {
  path: TWebpackPaths;
  isDev: boolean;
  mode: TWebpackMode;
  port: number;
  baseUrl: string;
};
