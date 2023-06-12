import fs from 'node:fs';
import path from 'node:path';

import { ESLint } from 'eslint';
import { describe, expect, it } from 'vitest';

import config from '../index.cjs';

const getEngine = (project, customConfig = config) => new ESLint({
    baseConfig: customConfig,
    overrideConfig: {
        env: {
            es6: true,
            node: true,
        },
        parserOptions: { project },
    },
});

const getErrors = (
    fileToTest, project = path.join('tests', 'configs', 'test.tsconfig.json'),
) => getEngine(project).lintFiles([fileToTest]);

describe('self-lint', () => {

    it('must not have any errors in index.cjs', async () => {
        expect.assertions(1);
        const results = await getErrors(
            'index.cjs',
            path.join('tests', 'configs', 'index.tsconfig.json'),
        );
        expect(results[0].messages).toStrictEqual([]);
    });

    it('must not have any errors in eslint-config.spec.js', async () => {
        expect.assertions(1);
        const results = await getErrors(
            path.join('tests', 'eslint-config.spec.js'),
            path.join('tests', 'configs', 'testjs.tsconfig.json'),
        );
        expect(results[0].messages).toStrictEqual([]);
    });
});

describe('check for unexpected changes', () => {

    it('must not have any unexpected changes in rules.json for js files', async () => {

        expect.assertions(1);

        const sourceFile = 'file.js';
        const rulesPath = path.join('tests', 'rules', 'rules-js.json');
        const tsConfigPath = path.join('tests', 'configs', 'dummy.tsconfig.json');

        const rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));
        const engine = getEngine(tsConfigPath);
        const lintConfig = await engine.calculateConfigForFile(sourceFile);
        const sortedKeys = Object.keys(lintConfig.rules).sort();
        const sortedRules = sortedKeys.reduce((object, key) => {
            object[key] = lintConfig.rules[key];
            return object;
        }, {});

        fs.writeFileSync(rulesPath, JSON.stringify(sortedRules, undefined, 4));

        expect(sortedRules).toStrictEqual(rules);
    });

    it('must not have any unexpected changes in rules.json for ts files', async () => {

        expect.assertions(1);

        const sourceFile = 'file.ts';
        const rulesPath = path.join('tests', 'rules', 'rules-ts.json');
        const tsConfigPath = path.join('tests', 'configs', 'dummy.tsconfig.json');

        const rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));
        const engine = getEngine(tsConfigPath);
        const lintConfig = await engine.calculateConfigForFile(sourceFile);
        const sortedKeys = Object.keys(lintConfig.rules).sort();
        const sortedRules = sortedKeys.reduce((object, key) => {
            object[key] = lintConfig.rules[key];
            return object;
        }, {});

        fs.writeFileSync(rulesPath, JSON.stringify(sortedRules, undefined, 4));

        expect(sortedRules).toStrictEqual(rules);
    });

    it('must not have any unexpected changes in rules.json for spec.js files', async () => {

        expect.assertions(1);

        const sourceFile = 'file.spec.js';
        const rulesPath = path.join('tests', 'rules', 'rules-spec-js.json');
        const tsConfigPath = path.join('tests', 'configs', 'dummy.tsconfig.json');

        const rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));
        const engine = getEngine(tsConfigPath);
        const lintConfig = await engine.calculateConfigForFile(sourceFile);
        const sortedKeys = Object.keys(lintConfig.rules).sort();
        const sortedRules = sortedKeys.reduce((object, key) => {
            object[key] = lintConfig.rules[key];
            return object;
        }, {});

        fs.writeFileSync(rulesPath, JSON.stringify(sortedRules, undefined, 4));

        expect(sortedRules).toStrictEqual(rules);
    });

    it('must not have any unexpected changes in rules.json for spec.ts files', async () => {

        expect.assertions(1);

        const sourceFile = 'file.spec.ts';
        const rulesPath = path.join('tests', 'rules', 'rules-spec-ts.json');
        const tsConfigPath = path.join('tests', 'configs', 'dummy.tsconfig.json');

        const rules = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));
        const engine = getEngine(tsConfigPath);
        const lintConfig = await engine.calculateConfigForFile(sourceFile);
        const sortedKeys = Object.keys(lintConfig.rules).sort();
        const sortedRules = sortedKeys.reduce((object, key) => {
            object[key] = lintConfig.rules[key];
            return object;
        }, {});

        fs.writeFileSync(rulesPath, JSON.stringify(sortedRules, undefined, 4));

        expect(sortedRules).toStrictEqual(rules);
    });

});

describe('check for unneeded rules', () => {

    it('must not define custom rules with the same options as defaults', async () => {
        expect.assertions(8);

        const configWithoutCustomRules = {
            ...config,
            rules: {},
        };

        const configOnlyCustomRules = {
            ...config,
            extends: [],
        };

        const engine1 = getEngine(path.join('tests', 'configs', 'index.tsconfig.json'), configWithoutCustomRules);
        const engine2 = getEngine(path.join('tests', 'configs', 'index.tsconfig.json'), configOnlyCustomRules);
        const config1 = await engine1.calculateConfigForFile('index.cjs');
        const config2 = await engine2.calculateConfigForFile('index.cjs');

        const duplicateRules = Object.keys(config2.rules).filter((rule) => config1.rules[rule]);
        for (const duplicateRule of duplicateRules) {
            expect(config1.rules[duplicateRule]).not.toStrictEqual(config2.rules[duplicateRule]);
        }
    });

    it('must not disable rules that were not enabled', async () => {
        expect.assertions(7);

        const configWithoutCustomRules = {
            ...config,
            rules: {},
        };

        const configOnlyCustomRules = {
            ...config,
            extends: [],
        };

        const engine1 = getEngine(path.join('tests', 'configs', 'index.tsconfig.json'), configWithoutCustomRules);
        const engine2 = getEngine(path.join('tests', 'configs', 'index.tsconfig.json'), configOnlyCustomRules);
        const config1 = await engine1.calculateConfigForFile('index.cjs');
        const config2 = await engine2.calculateConfigForFile('index.cjs');

        // Get all customer rules that are disabled
        const disabledRules = Object.keys(config2.rules).filter((rule) => config2.rules[rule][0] === 'off');
        for (const disabledRule of disabledRules) {
            expect(config1.rules[disabledRule]).toBeDefined();
        }
    });
});

describe('validate ESLint configs on files', () => {

    const filesPath = path.join('tests', 'test-files');
    const contents = fs.readdirSync(filesPath, { withFileTypes: true });
    const directories = contents.filter((content) => content.isDirectory()).map((directory) => directory.name);

    describe.each(directories)('directory: %s', (directory) => {
        const errorFilePath = path.join(filesPath, directory, 'errors.json');
        const notOkFilePath = path.join(filesPath, directory, 'nok.ts');
        const notOkSpecFilePath = path.join(filesPath, directory, 'nok.spec.ts');
        const notOkErrorsFilePath = path.join(filesPath, directory, 'nok-errors.json');
        for (const file of [notOkFilePath, notOkSpecFilePath]) {
            if (fs.existsSync(file)) {
                it('nok.ts file must give errors that match defined errors.json', async () => {
                    expect.assertions(1);
                    const errors = await getErrors(file);
                    fs.writeFileSync(notOkErrorsFilePath, JSON.stringify(errors, undefined, 4));
                    expect(errors[0].messages).toStrictEqual(JSON.parse(fs.readFileSync(errorFilePath).toString()));
                });
            }
        }

        const okFile = path.join(filesPath, directory, 'ok.ts');
        const okSpecFile = path.join(filesPath, directory, 'ok.spec.ts');
        const okErrorsFilePath = path.join(filesPath, directory, 'ok-errors.json');
        for (const file of [okFile, okSpecFile]) {
            if (fs.existsSync(file)) {
                it(`ok.ts file must give no errors`, async () => {
                    expect.assertions(1);
                    const errors = await getErrors(file);
                    fs.writeFileSync(okErrorsFilePath, JSON.stringify(errors, undefined, 4));
                    expect(errors[0].messages).toStrictEqual([]);
                });
            }
        }
    });
});
