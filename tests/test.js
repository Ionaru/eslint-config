const fs = require('fs');
const path = require('path');

const eslint = require('eslint');

function getErrors(fileToTest, project = path.join('tests', 'configs', 'test.tsconfig.json')) {
    const CLIEngine = eslint.CLIEngine;

    const cli = new CLIEngine({
        configFile: 'index.js',
        envs: ['node', 'es6'],
        parserOptions: {project}
    });

    return cli.executeOnFiles(fileToTest);
}

describe('Self-lint', () => {

    it('must not have any errors in Index.js', () => {
        expect(getErrors('index.js', path.join('tests', 'configs', 'index.tsconfig.json')).results[0].messages).toEqual([]);
    });
});

describe('Validate ESLint configs on files', () => {

    const filesPath = path.join('tests', 'test-files');
    const contents = fs.readdirSync(filesPath, {withFileTypes: true});
    const directories = contents.filter((content) => content.isDirectory()).map((dir) => dir.name);

    describe.each(directories)('directory: %s', (directory) => {
        const errorFilePath = path.join(filesPath, directory, 'errors.json');
        const notOkFile = path.join(filesPath, directory, 'nok.ts');
        const notOkSpecFile = path.join(filesPath, directory, 'nok.spec.ts');
        for (const file of [notOkFile, notOkSpecFile]) {
            if (fs.existsSync(file)) {
                it('should match defined errors', async () => {
                    expect(getErrors(file).results[0].messages).toStrictEqual(JSON.parse(fs.readFileSync(errorFilePath).toString()));
                });
            }
        }

        const okFile = path.join(filesPath, directory, 'ok.ts');
        const okSpecFile = path.join(filesPath, directory, 'ok.spec.ts');
        for (const file of [okFile, okSpecFile]) {
            if (fs.existsSync(file)) {
                it('should give no errors', () => {
                    expect(getErrors(file).results[0].messages).toStrictEqual([]);
                });
            }
        }
    });
});
