import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import reactRefresh from "eslint-plugin-react-refresh";
import tsEslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default tsEslint.config(
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    ignores: ["build", "node_modules", "public"],
  },
  {
    plugins: {
      "@typescript-eslint": tsEslint.plugin,
      "react-refresh": reactRefresh,
      prettier: eslintPluginPrettier,
    },
  },
  {
    rules: {
      ...eslintConfigPrettier.rules,
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@/quotes": ["warn", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      indent: [1, 2, { SwitchCase: 1 }],
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      "no-extra-boolean-cast": "warn",
      "no-trailing-spaces": "error",
    },
  },
);
