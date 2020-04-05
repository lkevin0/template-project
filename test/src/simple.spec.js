const exeq = require('exeq');
const { existsSync, mkdirSync, readFileSync } = require('fs');
const rimraf = require('rimraf');

if(!existsSync(`${process.cwd()}/target`)) {
    mkdirSync(`${process.cwd()}/target`);
}

describe('create simple project', () => {
    it('create simple 25 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} case25 --answers ${process.cwd()}/test/fixtures/answers/simple25.json --no-install`,
        ]);
        expect(existsSync(`${process.cwd()}/target/case25/rest/node.http`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case25/src/index.d.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case25/src/mixins/mongodb.mixin.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case25/src/services/routes.service.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case25/src/services/controllers/documents.service.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case25/src/services/stores/documents-store.service.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case25/src/utils/utils.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case25/test/unit/mixins/mongodb.mixin.spec.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case25/test/unit/services/routes.service.spec.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case25/test/unit/utils/utils.spec.ts`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case25/src/services/calculator.service.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/case25/test/unit/services/calculator.service.spec.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/case25/.eslintrc.json`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/case25/jest.config.js`)).toBeTruthy();
        
        const launch = JSON.parse(readFileSync(`${process.cwd()}/target/case25/.vscode/launch.json`));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync(`${process.cwd()}/target/case25/.vscode/tasks.json`));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync(`${process.cwd()}/target/case25/package.json`));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/case25`);
    });

    it('create simple 26 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} case26 --answers ${process.cwd()}/test/fixtures/answers/simple26.json --no-install`,
        ]);
        expect(existsSync(`${process.cwd()}/target/case26/src/services/calculator.service.ts`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/case26/test`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case26/.eslintrc.json`)).toBeTruthy();
        expect(existsSync(`${process.cwd()}/target/case26/jest.config.js`)).toBeFalsy();
        expect(existsSync(`${process.cwd()}/target/case26/src/index.d.ts`)).toBeFalsy();
        
        const launch = JSON.parse(readFileSync(`${process.cwd()}/target/case26/.vscode/launch.json`));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync(`${process.cwd()}/target/case26/.vscode/tasks.json`));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync(`${process.cwd()}/target/case26/package.json`));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/case26`);
    });

    it('create simple 27 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} case27 --answers ${process.cwd()}/test/fixtures/answers/simple27.json --no-install`,
        ]);
        expect(existsSync(`${process.cwd()}/target/case27/src/services/calculator.service.ts`)).toBeTruthy();
        expect(existsSync('./target/case27/test/unit/services/calculator.service.spec.ts')).toBeTruthy();
        expect(existsSync('./target/case27/jest.config.js')).toBeTruthy();
        expect(existsSync('./target/case27/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/case27/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/case27/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/case27/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/case27`);
    });

    it('create simple with lint project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} case28 --answers ${process.cwd()}/test/fixtures/answers/simple-lint.json --no-install`,
        ]);
        expect(existsSync(`${process.cwd()}/target/case28/src/services/calculator.service.ts`)).toBeTruthy();
        expect(existsSync('./target/case28/test')).toBeFalsy();
        expect(existsSync('./target/case28/jest.config.js')).toBeFalsy();
        expect(existsSync('./target/case28/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/case28/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/case28/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/case28/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/case28`);
    });

    it('create simple 29 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} case29 --answers ${process.cwd()}/test/fixtures/answers/simple29.json --no-install`,
        ]);
        expect(existsSync(`${process.cwd()}/target/case29/src/services/calculator.service.ts`)).toBeTruthy();
        expect(existsSync('./target/case29/test/unit/services/calculator.service.spec.ts')).toBeTruthy();
        expect(existsSync('./target/case29/jest.config.js')).toBeTruthy();
        expect(existsSync('./target/case29/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/case29/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/case29/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/case29/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/case29`);
    });

    it('create simple with prettier project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} case30 --answers ${process.cwd()}/test/fixtures/answers/simple-prettier.json --no-install`,
        ]);
        expect(existsSync(`${process.cwd()}/target/case30/src/services/calculator.service.ts`)).toBeTruthy();
        expect(existsSync('./target/case30/test')).toBeFalsy();
        expect(existsSync('./target/case30/jest.config.js')).toBeFalsy();
        expect(existsSync('./target/case30/src/index.d.ts')).toBeFalsy();

        const launch = JSON.parse(readFileSync('./target/case30/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/case30/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/case30/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/case30`);
    });

    it('create simple with jest project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} case31 --answers ${process.cwd()}/test/fixtures/answers/simpleWithJest.json --no-install`,
        ]);
        expect(existsSync(`${process.cwd()}/target/case31/src/services/calculator.service.ts`)).toBeTruthy();
        expect(existsSync('./target/case31/test/unit/services/calculator.service.spec.ts')).toBeTruthy();
        expect(existsSync('./target/case31/jest.config.js')).toBeTruthy();
        expect(existsSync('./target/case31/src/index.d.ts')).toBeFalsy();

        const launch = JSON.parse(readFileSync('./target/case31/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/case31/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        rimraf.sync(`${process.cwd()}/target/case31`);
    });

    it('create simple project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} case32 --answers ${process.cwd()}/test/fixtures/answers/simple.json --no-install`,
        ]);
        expect(existsSync(`${process.cwd()}/target/case32/src/services/calculator.service.ts`)).toBeTruthy();
        expect(existsSync('./target/case32/test')).toBeFalsy();
        expect(existsSync('./target/case32/jest.config.js')).toBeFalsy();
        expect(existsSync('./target/case32/src/index.d.ts')).toBeFalsy();
        const launch = JSON.parse(readFileSync('./target/case32/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/case32/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);
        
        rimraf.sync(`${process.cwd()}/target/case32`);
    });
});