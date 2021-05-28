const path = require("path");

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

    return config;
  },
};
