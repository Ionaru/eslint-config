/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const { ESLint } = require('eslint');

const config = require('../index.js');

const getErrors = (fileToTest, project = path.join('tests', 'configs', 'test.tsconfig.json')) => {
    const engine = new ESLint({
        baseConfig: config,
        overrideConfig: {
            env: {
                es6: true,
                node: true,
            },
            parserOptions: {project},
        },
    });

    return engine.lintFiles([fileToTest]);
};

describe('self-lint', () => {

    it('must not have any errors in Index.js', async () => {
        expect.assertions(1);
        const results = await getErrors(
            'index.js',
            path.join('tests', 'configs', 'index.tsconfig.json')
        );
        expect(results[0].messages).toStrictEqual([]);
    });

    it('must not have any errors in eslint-config.spec.js', async () => {
        expect.assertions(1);
        const results = await getErrors(
            path.join('tests', 'eslint-config.spec.js'),
            path.join('tests', 'configs', 'testjs.tsconfig.json')
        );
        expect(results[0].messages).toStrictEqual([]);
    });
});

describe('validate ESLint configs on files', () => {

    const filesPath = path.join('tests', 'test-files');
    const contents = fs.readdirSync(filesPath, {withFileTypes: true});
    const directories = contents.filter((content) => content.isDirectory()).map((dir) => dir.name);

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
                    if (errors.length) {
                        fs.writeFileSync(okErrorsFilePath, JSON.stringify(errors, undefined, 4));
                    }
                    expect(errors[0].messages).toStrictEqual([]);
                });
            }
        }
    });
});
