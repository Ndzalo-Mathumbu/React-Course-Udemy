import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1) Base JS rules
  js.configs.recommended,

  // 2) React rules
  pluginReact.configs.flat.recommended,

  // 3) ✅ Modern React JSX transform (React 17+ / Vite)
  pluginReact.configs.flat["jsx-runtime"],

  // 4) ✅ Your overrides MUST be last so they win
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/react-in-jsx-scope": ["warn", "off"],
      "react/jsx-uses-react": "off",
    },
  },
]);
