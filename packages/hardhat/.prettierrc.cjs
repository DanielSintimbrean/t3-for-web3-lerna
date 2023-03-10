/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 80,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  overrides: [
    {
      files: "contracts/**/*.sol",
      options: {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
      },
    },
  ],
  plugins: [require("prettier-plugin-solidity")],
};
