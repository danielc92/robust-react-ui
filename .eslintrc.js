module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "lf" }],
    "react/jsx-props-no-spreading": "off", // used heavily in tests and stories
    "react/prop-types":"off", // redundant with typescript typings
    "import/no-extraneous-dependencies": "off", // used heavily in stories
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ["**/*.test.tsx"],
      env: {
        jest: true,
      },
    },
  ],
};
