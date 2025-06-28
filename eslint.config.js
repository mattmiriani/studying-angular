// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettierPlugin = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");
const eslintPluginImport = require("eslint-plugin-import");

module.exports = tseslint.config(
    {
      files: ["**/*.ts"],
      extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
        ...angular.configs.tsRecommended,
        prettierConfig,
      ],
      plugins: {
        prettier: prettierPlugin,
        import: eslintPluginImport
      },
      processor: angular.processInlineTemplates,
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "prettier/prettier": "error",

        // Regras para ordenação de imports
        "import/order": [
          "error",
          {
            "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
            "pathGroups": [
              { // Exemplo: para imports de alias do seu tsconfig (ex: @app/*)
                "pattern": "@app/**",
                "group": "internal",
                "position": "after"
              },
              { // Exemplo: para imports de alias do seu tsconfig (ex: @shared/*)
                "pattern": "@shared/**",
                "group": "internal",
                "position": "after"
              }
            ],
            "newlines-between": "always",
            "alphabetize": {
              "order": "asc",
              "caseInsensitive": true
            }
          }
        ],
        "import/no-unresolved": "off",
        "import/named": "off",
        "import/namespace": "off",
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-duplicates": "error",
      },
    },
    {
      files: ["**/*.html"],
      extends: [
        ...angular.configs.templateRecommended,
        ...angular.configs.templateAccessibility,
        prettierConfig
      ],
      plugins: {
        prettier: prettierPlugin,
      },
      rules: {
        "prettier/prettier": "error",
      },
    }
);