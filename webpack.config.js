import path from "path";
import HTMLPlagin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/app.js",
  output: {
    filename: "bundle[chunkhash].js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HTMLPlagin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
