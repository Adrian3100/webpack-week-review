import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to all .js files
        exclude: /node_modules/, // Skip files in node_modules
        use: {
          loader: "babel-loader", // Use babel-loader to transpile
        },
      }, 
    ],
  },
};
