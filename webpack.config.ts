import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { buildWebpackConfig } from "./config/buildWebpackConfig";
import { BuildPath } from "./config/types/config";

const paths: BuildPath = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build.js"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});
export default config;
