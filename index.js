module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6
  },
  plugins: [
    "eyeem-refactor"
    "flowtype",
    "import",
    "jest",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks",
    "security",
  ],
  extends: [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:security/recommended",
    "prettier"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        jsxBracketSameLine: true
      }
    ],

    // Error with some exceptions
    "id-length": ["error", { exceptions: ["_", "T", "t", "C", "i", "q"] }],

    // It's ok to not name functions
    "func-names": 0,

    // turned this one off, cause it complains on alt tags that include
    // "Getty Images" or "Sign up as photographer", for example
    "jsx-a11y/img-redundant-alt": 0,
    "jsx-a11y/no-static-element-interactions": 0,

    "import/extensions": [1, { js: "never", jsx: "never" }],

    // warning only until we have a proper solution for client side logging
    "no-console": 1,
    "jsx-a11y/anchor-has-content": 1,

    // didn't work well for us, might try again in the future
    "react/sort-comp": 0,

    // we're not ready for these yet, might turn into an error later
    "react/require-default-props": 1,
    "react/forbid-prop-types": 1,

    // flow does this for us
    "react/prop-types": 0,

    // disabled because its complaining everywhere
    "react/destructuring-assignment": 0,

    "import/no-useless-path-segments": 0,
    "import/no-cycle": 0,

    "jsx-a11y/click-events-have-key-events": 0,

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Our own refactoring rules
    "eyeem-refactor/no-deprecated-imports": 2,
    "eyeem-refactor/no-classnames-module": 2
  },
  globals: {
    casper: true,
    phantom: true,
    document: false
  },
  env: {
    browser: true,
    node: true,
    "jest/globals": true
  }
};
