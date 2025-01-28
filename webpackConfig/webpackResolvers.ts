import webpack from "webpack";
import { TWebpackOptions } from "./types";

export function webpackResolvers({
  path,
}: TWebpackOptions): webpack.ResolveOptions {
  const alias = {
    "@app/": `${path.src}/app/index`,
    "@app": `${path.src}/app/`,
    "@providers": `${path.src}/app/providers`,
    "@pages": `${path.src}/app/pages`,
    "@features": `${path.src}/features/`,
    "@entities": `${path.src}/entities/`,
    "@widgets": `${path.src}/widgets/`,
    "@shared": `${path.src}/shared/`,
    "@ui": `${path.src}/shared/ui/`,
    "@assets": `${path.src}/shared/assets/`,
    "@hooks": `${path.src}/shared/lib/hooks/`,
  };

  return {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    preferAbsolute: true,
    modules: [path.src, "node_modules"],
    mainFiles: ["index"],
    alias,
  };
}
