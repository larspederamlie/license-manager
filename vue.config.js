module.exports = {
  transpileDependencies: [
    "bootstrap-vue",
    "@dnvgl-onefoundation/onedesign-vue",
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(node)$/,
          parser: { amd: false },
          use: {
            loader: "@vercel/webpack-asset-relocator-loader",
            options: {
              outputAssetBase: "native_modules",
            },
          },
        },
      ],
    },
  },
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      externals: ["keytar"],
      builderOptions: {
        publish: ["github"],
      },
    },
  },
};
