module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        '@typescript-eslint/tslint',
        'sonarjs',
        'no-null',
        'import',
        'prefer-arrow',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:sonarjs/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    rules: {
        'import/extensions': [
            'error',
            'always',
            {
                'ignorePackages': true
            },
        ],
        'import/order': [
            'error',
            {
                'alphabetize': {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
            },
        ],
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array-simple',
            },
        ],
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
            },
        ],
        'indent': [
            'error',
            4,
            {
                ObjectExpression: 'first',
                FunctionDeclaration: {
                    parameters: 'first',
                },
                FunctionExpression: {
                    parameters: 'first',
                },
                SwitchCase: 1,
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                prefix: ['I'],
            },
        ],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/semi': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': ['error', 'always'],
        'complexity': 'off',
        'constructor-super': 'error',
        'curly': 'error',
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': ['error', 'smart'],
        'guard-for-in': 'error',
        'max-classes-per-file': ['error', 1],
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-debugger': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'off',
        'no-invalid-this': 'off',
        'no-multiple-empty-lines': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow/prefer-arrow-functions': 'error',
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'radix': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        'spaced-comment': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'off',
        '@typescript-eslint/tslint/config': [
            'error',
            {
                rules: {
                    'import-spacing': true,
                    'jsdoc-format': [true, 'check-multiline-start'],
                    'no-reference-import': true,
                    'object-literal-sort-keys': true,
                    'one-line': [
                        true,
                        'check-catch',
                        'check-else',
                        'check-finally',
                        'check-open-brace',
                        'check-whitespace',
                    ],
                    'prefer-conditional-expression': true,
                    'whitespace': [
                        true,
                        'check-branch',
                        'check-decl',
                        'check-operator',
                        'check-separator',
                        'check-type',
                        'check-typecast',
                        'check-type-operator',
                        'check-rest-spread',
                    ],
                },
            },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
            },
        ],
        'quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'camelcase': [
            'error',
            {
                properties: 'never',
                ignoreDestructuring: true,
                ignoreImports: true,
            },
        ],
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-shadow': [
            'error',
            {
                builtinGlobals: true,
                hoist: 'all',
            },
        ],
        'id-match': 'error',
        'max-len': [
            'error',
            {
                code: 140,
            },
        ],
        'no-null/no-null': 'error',
        'no-underscore-dangle': 'error',
        'no-unused-expressions': 'error',
    },
    'overrides': [
        {
            'files': ['*.spec.ts'],
            "extends": ["plugin:jest/all"],
            'rules': {
                'import/extensions': 'off',
                'jest/no-hooks': 'off',
                'sonarjs/no-identical-functions': 'off',
                'sonarjs/no-duplicate-string': 'off'
            }
        }
    ]
};
