import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add a custom configuration to disable specific rules
  {
    rules: {
      // Previous rules
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // New rules to disable
      "react/display-name": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-array-constructor": "off",
      // New rule to disable
      "react-hooks/rules-of-hooks": "off",
      "react/no-find-dom-node": "off",
      "no-require-imports": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;
