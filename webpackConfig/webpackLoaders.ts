import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "node:path";
import webpack from "webpack";
import { TWebpackOptions } from "./types";

export function webpackLoaders(
  options: TWebpackOptions,
): webpack.RuleSetRule[] {
  const { isDev } = options;
  const fontsRegex = /\.(woff|woff2)$/i;
  const imagesRegex = /\.(png|jpe?g|gif)$/i;

  const imagesLoader = {
    test: imagesRegex,
    type: "asset/resource",
    generator: {
      filename: "assets/images/[name][ext]",
    },
  };

  const fontsLoader = {
    test: fontsRegex,
    type: "asset/resource",
    generator: {
      filename: "assets/fonts/[name][ext]",
    },
  };

  const svgrLoader = [
    {
      test: /\.svg$/i,
      type: "asset",
      resourceQuery: /url/,
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            dimensions: false,
          },
        },
      ],
    },
  ];

  const babelTsLoader = {
    test: /\.(jsx?|tsx?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
      },
      {
        loader: "ts-loader",
      },
    ],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          import: true,
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[name]___[hash:base64:5]"
              : "[hash:base64:5]",
            namedExport: false,
          },
        },
      },
      "sass-loader",
    ],
  };

  return [babelTsLoader, scssLoader, ...svgrLoader, imagesLoader, fontsLoader];
}
