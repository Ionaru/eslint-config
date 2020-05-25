const fs = require('fs');
const eslint = require('eslint');

function getErrors(configFile, fileToTest) {
    const CLIEngine = eslint.CLIEngine;

    const cli = new CLIEngine({
        configFile: configFile,
        envs: ['node', 'es6'],
        parserOptions: {
            project: 'tests/tsconfig.json'
        }
    });

    return cli.executeOnFiles(fileToTest);
}

describe('Validate ESLint configs on valid files', () => {

    const path = 'tests/test-files/ok/';
    const files = fs.readdirSync(path);

    files.forEach((file) => {
        it(file, () => {
            expect(getErrors('index.js', path + file).results[0].messages).toEqual([]);
        });
    });
});

describe('Validate ESLint configs on invalid files', () => {

    const path = 'tests/test-files/nok/';

    it('interfaces', () => {
        expect(getErrors('index.js', path + 'interface.ts').results[0].messages).toEqual(
            [
                {
                    "column": 11,
                    "endColumn": 14,
                    "endLine": 1,
                    "line": 1,
                    "message": "Interface name Moo must have one of the following prefixes: I",
                    "messageId": "missingAffix",
                    "nodeType": "Identifier",
                    "ruleId": "@typescript-eslint/naming-convention",
                    "severity": 2
                },
                {
                    "column": 14,
                    "endColumn": 14,
                    "endLine": 2,
                    "fix": {
                        "range": [
                            29,
                            29
                        ],
                        "text": ";"
                    },
                    "line": 2,
                    "message": "Expected a semicolon.",
                    "messageId": "expectedSemi",
                    "nodeType": "Identifier",
                    "ruleId": "@typescript-eslint/member-delimiter-style",
                    "severity": 2
                },
                {
                    "column": 14,
                    "endColumn": 14,
                    "endLine": 3,
                    "fix": {
                        "range": [
                            43,
                            43
                        ],
                        "text": ";"
                    },
                    "line": 3,
                    "message": "Expected a semicolon.",
                    "messageId": "expectedSemi",
                    "nodeType": "Identifier",
                    "ruleId": "@typescript-eslint/member-delimiter-style",
                    "severity": 2
                },
                {
                    "column": 5,
                    "endColumn": 21,
                    "endLine": 4,
                    "line": 4,
                    "message": "Identifier 'invalid_property' is not in camel case.",
                    "messageId": "notCamelCase",
                    "nodeType": "Identifier",
                    "ruleId": "camelcase",
                    "severity": 2
                }
            ]
        );
    });
});
