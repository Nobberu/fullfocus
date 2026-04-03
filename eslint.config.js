import expoConfig from "eslint-config-expo/flat";

module.exports = [
  ...expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "import/no-unresolved": "off",
    },
  },
];