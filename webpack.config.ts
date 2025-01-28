import dotenv from "dotenv";
import path from "node:path";
import { WebpackConfiguration } from "webpack-cli";
import { TWebpackEnv, TWebpackOptions } from "./webpackConfig/types";
import { webpackDevServer } from "./webpackConfig/webpackDevServer";
import { webpackLoaders } from "./webpackConfig/webpackLoaders";
import { webpackPlugins } from "./webpackConfig/webpackPlugins";
import { webpackResolvers } from "./webpackConfig/webpackResolvers";

export default (env: TWebpackEnv): WebpackConfiguration => {
  const port = env.port || 3001;
  const mode = env.mode || "development";
  const isDev = mode === "development";

  console.log("ENV BASE URL########### ", process.env.BASE_URL);

  dotenv.config();

  const options: TWebpackOptions = {
    path: {
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src"),
      entry: path.resolve(__dirname, "src", "index.tsx"),
      build: path.resolve(__dirname, "build"),
      public: path.resolve(__dirname, "src", "public"),
    },
    isDev,
    mode,
    port,
    baseUrl: process.env.BASE_URL || "",
  };

  return {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    mode,
    target: ["web", "es5"],
    devtool: "inline-source-map",
    plugins: webpackPlugins(options),
    module: {
      rules: webpackLoaders(options),
    },
    resolve: webpackResolvers(options),
    devServer: webpackDevServer(options),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.[contenthash:8].js",
      chunkFilename: "chunk.[contenthash:8].js",
      clean: true,
      publicPath: "/",
    },
  };
};
