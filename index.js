module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:sonarjs/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    overrides: [
        {
            extends: ['plugin:jest/all'],
            files: ['*.spec.ts', '*.spec.js'],
            rules: {
                'import/extensions': 'off',
                'jest/lowercase-name': 'off',
                'jest/no-hooks': 'off',
                'jest/prefer-each': 'off',
                'sonarjs/no-duplicate-string': 'off',
                'sonarjs/no-identical-functions': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import',
        'prefer-arrow',
        'sonarjs',
        'unicorn',
    ],
    rules: {
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array-simple',
            },
        ],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
            },
        ],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                multilineDetection: 'brackets',
                overrides: {
                    interface: {
                        singleline: {
                            delimiter: 'semi',
                            requireLast: true,
                        },
                    },
                    typeLiteral: {
                        singleline: {
                            delimiter: 'semi',
                            requireLast: true,
                        },
                    },
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                format: ['camelCase'],
                leadingUnderscore: 'allow',
                selector: 'classProperty',
            },
            {
                // eslint-disable-next-line unicorn/no-null
                format: null,
                selector: 'objectLiteralProperty',
            },
            {
                // eslint-disable-next-line unicorn/no-null
                format: null,
                selector: 'typeProperty',
            },
            {
                format: ['camelCase'],
                selector: 'default',
            },
            {
                format: ['camelCase'],
                selector: 'variable',
            },
            {
                format: ['camelCase'],
                leadingUnderscore: 'allow',
                selector: 'parameter',
            },
            {
                format: ['PascalCase'],
                selector: 'typeLike',
            },
            {
                format: ['PascalCase'],
                prefix: ['I'],
                selector: 'interface',
            },
            {
                format: ['UPPER_CASE'],
                selector: 'enumMember',
            },
            {
                // eslint-disable-next-line unicorn/no-null
                format: null,
                modifiers: ['destructured'],
                selector: ['variable', 'parameter'],
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-shadow': [
            'error',
            {
                builtinGlobals: true,
                hoist: 'all',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                vars: 'all',
            },
        ],
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': ['error', 'always'],
        'brace-style': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'curly': 'error',
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': ['error', 'smart'],
        'guard-for-in': 'error',
        'id-match': 'error',
        'import/extensions': [
            'error',
            'always',
            {
                ignorePackages: true,
            },
        ],
        'import/order': [
            'error',
            {
                'alphabetize': {
                    caseInsensitive: true,
                    order: 'asc',
                },
                'newlines-between': 'always',
            },
        ],
        'indent': [
            'error',
            4,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                FunctionDeclaration: {
                    parameters: 'first',
                },
                // eslint-disable-next-line @typescript-eslint/naming-convention
                FunctionExpression: {
                    parameters: 'first',
                },
                // eslint-disable-next-line @typescript-eslint/naming-convention
                ObjectExpression: 'first',
                // eslint-disable-next-line @typescript-eslint/naming-convention
                SwitchCase: 1,
            },
        ],
        'max-classes-per-file': ['error', 1],
        'max-len': [
            'error',
            {
                code: 140,
            },
        ],
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-console': 'error',
        'no-duplicate-imports': 'error',
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'off',
        'no-multiple-empty-lines': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': [
            'error',
            {
                allowAfterThis: true,
            },
        ],
        'no-unused-expressions': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow/prefer-arrow-functions': 'error',
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: true,
            },
        ],
        'radix': 'error',
        'sort-keys': [
            'error',
            'asc',
            {
                caseSensitive: false,
                natural: true,
            },
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        'space-in-parens': ['error', 'never'],
        'spaced-comment': 'error',
        'unicorn/no-null': 'error',
        'unicorn/prefer-ternary': 'error',
        'valid-typeof': 'off',
    },
};
