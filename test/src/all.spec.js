const exeq = require('exeq');
const { existsSync, readFileSync } = require('fs');
const rimraf = require('rimraf');

if(!existsSync(`${process.cwd()}/target`)) {
    mkdirSync(`${process.cwd()}/target`);
}

describe('create all project', () => {
    // afterEach(() => {
    //     exeq(['mv ./template/package.json ./template/package.json.tmp']);
    // });

    it('create all project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} all --answers ${process.cwd()}/test/fixtures/answers/all.json --no-install`,
        ]);
        expect(existsSync(`${process.cwd()}/target/all/rest/node.http`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/src/mixins/mongodb.mixin.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/src/services/routes.service.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/src/services/controllers/documents.service.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/src/services/stores/documents-store.service.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/src/utils/utils.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/test/unit/mixins/mongodb.mixin.spec.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/test/unit/services/routes.service.spec.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/test/unit/utils/utils.spec.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/src/services/calculator.service.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/all/test/unit/services/calculator.service.spec.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/all/.eslintrc.json`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/jest.config.js`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/all/src/index.d.ts`)).toBeTruthy();
        
        const launch = JSON.parse(readFileSync(`${process.cwd()}/target/all/.vscode/launch.json`));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync(`${process.cwd()}/target/all/.vscode/tasks.json`));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync(`${process.cwd()}/target/all/package.json`));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/all`);
    });
});