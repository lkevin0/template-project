const exeq = require('exeq');
const { existsSync, readFileSync } = require('fs');
const rimraf = require('rimraf');

describe('create api project', () => {
    it('create api9 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api9 --answers ${process.cwd()}/test/fixtures/answers/api9.json --no-install`,
        ]);
        expect(existsSync('./target/api9/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api9/src/mixins/mongodb.mixin.ts')).toBeFalsy();
        expect(existsSync('./target/api9/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api9/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/api9/src/services/stores/documents-store.service.ts')).toBeFalsy();
        expect(existsSync('./target/api9/src/utils/utils.ts')).toBeFalsy();
        expect(existsSync('./target/api9/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api9/test/unit/services/routes.service.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api9/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api9/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api9/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api9/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/api9/jest.config.js')).toBeTruthy();
        expect(existsSync('./target/api9/src/index.d.ts')).toBeTruthy();
        
        const launch = JSON.parse(readFileSync('./target/api9/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/api9/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/api9/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/api9`);
    });

    it('create api10 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api10 --answers ${process.cwd()}/test/fixtures/answers/api10.json --no-install`,
        ]);
        expect(existsSync('./target/api10/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api10/src/mixins/mongodb.mixin.ts')).toBeFalsy();
        expect(existsSync('./target/api10/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api10/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/api10/src/services/stores/documents-store.service.ts')).toBeFalsy();
        expect(existsSync('./target/api10/src/utils/utils.ts')).toBeFalsy();
        expect(existsSync('./target/api10/test')).toBeFalsy();
        expect(existsSync('./target/api10/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api10/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api10/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/api10/jest.config.js')).toBeFalsy();
        expect(existsSync('./target/api10/src/index.d.ts')).toBeTruthy();
        
        const launch = JSON.parse(readFileSync('./target/api10/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/api10/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/api10/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/api10`);
    });

    it('create api11 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api11 --answers ${process.cwd()}/test/fixtures/answers/api11.json --no-install`,
        ]);
        expect(existsSync('./target/api11/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api11/src/mixins/mongodb.mixin.ts')).toBeFalsy();
        expect(existsSync('./target/api11/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api11/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/api11/src/services/stores/documents-store.service.ts')).toBeFalsy();
        expect(existsSync('./target/api11/src/utils/utils.ts')).toBeFalsy();
        expect(existsSync('./target/api11/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api11/test/unit/services/routes.service.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api11/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api11/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api11/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api11/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/api11/jest.config.js')).toBeTruthy();
        expect(existsSync('./target/api11/src/index.d.ts')).toBeTruthy();
        
        const launch = JSON.parse(readFileSync('./target/api11/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/api11/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/api11/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/api11`);
    });

    it('create api12 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api12 --answers ${process.cwd()}/test/fixtures/answers/api12.json --no-install`,
        ]);
        expect(existsSync('./target/api12/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api12/src/mixins/mongodb.mixin.ts')).toBeFalsy();
        expect(existsSync('./target/api12/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api12/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/api12/src/services/stores/documents-store.service.ts')).toBeFalsy();
        expect(existsSync('./target/api12/src/utils/utils.ts')).toBeFalsy();
        expect(existsSync('./target/api12/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api12/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api12/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api12/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api12/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api12/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/api12/jest.config.js')).toBeFalsy();
        expect(existsSync('./target/api12/src/index.d.ts')).toBeTruthy();
        
        const launch = JSON.parse(readFileSync('./target/api12/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/api12/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/api12/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/api12`);
    });

    it('create api13 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api13 --answers ${process.cwd()}/test/fixtures/answers/api13.json --no-install`,
        ]);
        expect(existsSync('./target/api13/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api13/src/mixins/mongodb.mixin.ts')).toBeFalsy();
        expect(existsSync('./target/api13/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api13/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/api13/src/services/stores/documents-store.service.ts')).toBeFalsy();
        expect(existsSync('./target/api13/src/utils/utils.ts')).toBeFalsy();
        expect(existsSync('./target/api13/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api13/test/unit/services/routes.service.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api13/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api13/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api13/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api13/.eslintrc.json')).toBeFalsy();
        expect(existsSync('./target/api13/jest.config.js')).toBeTruthy();
        expect(existsSync('./target/api13/src/index.d.ts')).toBeTruthy();
        
        const launch = JSON.parse(readFileSync('./target/api13/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/api13/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/api13/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/api13`);
    });

    it('create api14 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api14 --answers ${process.cwd()}/test/fixtures/answers/api14.json --no-install`,
        ]);
        expect(existsSync('./target/api14/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api14/src/mixins/mongodb.mixin.ts')).toBeFalsy();
        expect(existsSync('./target/api14/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api14/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/api14/src/services/stores/documents-store.service.ts')).toBeFalsy();
        expect(existsSync('./target/api14/src/utils/utils.ts')).toBeFalsy();
        expect(existsSync('./target/api14/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api14/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api14/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api14/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api14/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api14/.eslintrc.json')).toBeFalsy();
        expect(existsSync('./target/api14/jest.config.js')).toBeFalsy();
        expect(existsSync('./target/api14/src/index.d.ts')).toBeTruthy();
        
        const launch = JSON.parse(readFileSync('./target/api14/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/api14/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/api14/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/api14`);
    });

    it('create api project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api1 --answers ${process.cwd()}/test/fixtures/answers/apiOnly.json --no-install`,
        ]);
        expect(existsSync('./target/api1/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api1/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api1/src/index.d.ts')).toBeTruthy();
        expect(existsSync('./target/api1/test')).toBeFalsy();
        expect(existsSync('./target/api1/jest.config.js')).toBeFalsy();

        const launch = JSON.parse(readFileSync('./target/api1/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/api1/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        rimraf.sync(`${process.cwd()}/target/api1`);
    });

    it('create api with jest project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api-jest --answers ${process.cwd()}/test/fixtures/answers/apiWithJest.json --no-install`,
        ]);
        expect(existsSync('./target/api-jest/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api-jest/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-jest/src/index.d.ts')).toBeTruthy();
        expect(existsSync('./target/api-jest/test/unit/services/routes.service.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api-jest/jest.config.js')).toBeTruthy();

        const launch = JSON.parse(readFileSync('./target/api-jest/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/api-jest/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        rimraf.sync(`${process.cwd()}/target/api-jest`);
    });
});