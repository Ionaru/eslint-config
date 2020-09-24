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
        const okFile = path.join(filesPath, directory, 'ok.ts');

        if (fs.existsSync(notOkFile)) {
            it('should match defined errors', () => {
                expect(getErrors(notOkFile).results[0].messages).toEqual(JSON.parse(fs.readFileSync(errorFilePath).toString()));
            });
        }

        if (fs.existsSync(okFile)) {
            it('should give no errors', () => {
                expect(getErrors(okFile).results[0].messages).toEqual([]);
            });
        }
    });
});
