import path from "node:path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { TWebpackOptions } from "./types";

export function webpackDevServer(
  options: TWebpackOptions,
): DevServerConfiguration {
  const { port } = options;

  return {
    historyApiFallback: true,
    port,
    open: true,
    hot: true,
    compress: true,
    liveReload: true,
    client: {
      progress: true,
    },
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    proxy: [
      {
        context: "/api",
        target: options.baseUrl,
        secure: false,
        changeOrigin: true,
      },
    ],
  };
}
