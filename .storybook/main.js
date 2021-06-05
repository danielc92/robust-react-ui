const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: ["@storybook/addon-a11y", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),

      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
        plugins: ["@babel/plugin-proposal-class-properties"],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");
    // Solved by https://github.com/storybookjs/storybook/issues/4136#issuecomment-676797519
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};
