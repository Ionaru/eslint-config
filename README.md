# ESLint-config

[![npm version](https://img.shields.io/npm/v/@ionaru/eslint-config.svg?style=for-the-badge)](https://www.npmjs.com/package/@ionaru/eslint-config)

## Description
My custom flavoured config for ESLint based on my standard TSLint configuration.

## Usage

### Install
```
npm install -D @ionaru/eslint-config eslint @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jest eslint-plugin-no-null eslint-plugin-prefer-arrow eslint-plugin-sonarjs eslint-plugin-unicorn
```

### Configuration

tsconfig.eslint.json example
```json
{
    "extends": "./tsconfig.json",
    "include": [
        "src/**/*.ts"
    ]
}
```

.eslintrc.json example
```json
{
    "env": {
        "es6": true
    },
    "parserOptions": {
        "project": "tsconfig.eslint.json",
        "sourceType": "module"
    },
    "extends": [
        "@ionaru"
    ]
}
```

package.json example
```json
...
"scripts": {
    ...
    "lint": "eslint --ext ts --max-warnings 0 src",
    ...
},
...
```
