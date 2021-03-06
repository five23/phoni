const HtmlWebPackPlugin = require("html-webpack-plugin");
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader?name=[name].[ext]", // <-- retain original file name
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MergeJsonWebpackPlugin({
      encoding: "ascii",
      debug: true,
      duplicates: true,
      files: [
        "./metadata/homo004.json",
        "./metadata/homo005.json",
        "./metadata/homo006.json",
        "./metadata/homo007.json",
        "./metadata/homo008.json",
        "./metadata/homo009.json",
        "./metadata/homo010.json",
        "./metadata/homo011.json",
        "./metadata/homo012.json",
        "./metadata/homo013.json",
        "./metadata/homo014.json",
        /*"./metadata/homo015.json",*/
        "./metadata/homo016.json",
        "./metadata/homo017.json",
        "./metadata/homo018.json",
        "./metadata/homo019.json",
        "./metadata/homo020.json",
        "./metadata/homo021.json",
        "./metadata/homo022.json",
        "./metadata/homo023.json",
        "./metadata/homo024.json",
        "./metadata/homo025.json",
        "./metadata/homo026.json",
        "./metadata/homo027.json",
        "./metadata/homo028.json",
        "./metadata/homo029.json",
        "./metadata/homo030.json",
        "./metadata/homo031.json",
        "./metadata/homo032.json",
        "./metadata/homo033.json",
        "./metadata/homo034.json",
        "./metadata/homo035.json",
        "./metadata/homo036.json",
        "./metadata/homo037.json",
        "./metadata/homo038.json",
        "./metadata/homo039.json",
        "./metadata/homo040.json",
        "./metadata/homo041.json",
        "./metadata/homo042.json",
        "./metadata/homo043.json",
        "./metadata/homo044.json",
        "./metadata/homo044.json",
        "./metadata/homo045.json",
        "./metadata/homo046.json",
        "./metadata/homo047.json",
        "./metadata/homo048.json",
        "./metadata/homo049.json",
        "./metadata/homo049.json",
        "./metadata/homo050.json",
        "./metadata/homo051.json",
        "./metadata/homo052.json",
        "./metadata/homo053.json",
        "./metadata/homo054.json",
        "./metadata/homo055.json",
        "./metadata/homo056.json",
        "./metadata/homo057.json",
        "./metadata/homo058.json",
        "./metadata/homo059.json",
      ],
      output: {
        fileName: "./metadata/catalog.json",
      },
    }),
  ],
};
