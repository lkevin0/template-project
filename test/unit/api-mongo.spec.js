const exeq = require('exeq');
const { existsSync, readFileSync } = require('fs');
const rimraf = require('rimraf');

describe('create api with mongo project', () => {
    it('create api-mongo2 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init  ${process.cwd()} api-mongo2 --answers ${process.cwd()}/test/fixtures/answers/api-mongo2.json --no-install`,
        ]);
        expect(existsSync('./target/api-mongo2/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api-mongo2/src/index.d.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo2/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo2/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo2/src/services/controllers/documents.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo2/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo2/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo2/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo2/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo2/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo2/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo2/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo2/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/api-mongo2/jest.config.js')).toBeFalsy();
        
        
        const launch = JSON.parse(readFileSync('./target/api-mongo2/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/api-mongo2/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/api-mongo2/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/api-mongo2`);
    });

    it('create api-mongo3 project', async () => {
        await exeq([
            `cd  ${process.cwd()}/target`,
            `moleculer init  ${process.cwd()} api-mongo3 --answers ${process.cwd()}/test/fixtures/answers/api-mongo3.json --no-install`,
        ]);
        expect(existsSync('./target/api-mongo3/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/src/index.d.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/src/services/controllers/documents.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/test/unit/mixins/mongodb.mixin.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/test/unit/services/routes.service.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/test/unit/utils/utils.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo3/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo3/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/api-mongo3/jest.config.js')).toBeTruthy();
        
        
        const launch = JSON.parse(readFileSync('./target/api-mongo3/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/api-mongo3/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/api-mongo3/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/api-mongo3`);
    });

    it('create api-mongo4 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api-mongo4 --answers ${process.cwd()}/test/fixtures/answers/api-mongo4.json --no-install`,
        ]);
        expect(existsSync('./target/api-mongo4/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api-mongo4/src/index.d.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo4/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo4/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo4/src/services/controllers/documents.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo4/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo4/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo4/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo4/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo4/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo4/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo4/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo4/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/api-mongo4/jest.config.js')).toBeFalsy();
        
        
        const launch = JSON.parse(readFileSync('./target/api-mongo4/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/api-mongo4/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/api-mongo4/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/api-mongo4`);
    });

    it('create api-mongo5 project', async () => {
        await exeq([
            `cd ./target`,
            `moleculer init ${process.cwd()} api-mongo5 --answers ${process.cwd()}/test/fixtures/answers/api-mongo5.json --no-install`,
        ]);
        expect(existsSync('./target/api-mongo5/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api-mongo5/src/index.d.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo5/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo5/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo5/src/services/controllers/documents.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo5/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo5/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo5/test/unit/mixins/mongodb.mixin.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo5/test/unit/services/routes.service.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo5/test/unit/utils/utils.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo5/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo5/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo5/.eslintrc.json')).toBeFalsy();
        expect(existsSync('./target/api-mongo5/jest.config.js')).toBeTruthy();
        
        
        const launch = JSON.parse(readFileSync('./target/api-mongo5/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/api-mongo5/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/api-mongo5/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/api-mongo5`);
    });

    it('create api-mongo6 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init .. api-mongo6 --answers ${process.cwd()}/test/fixtures/answers/api-mongo6.json --no-install`,
        ]);
        expect(existsSync('./target/api-mongo6/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api-mongo6/src/index.d.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo6/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo6/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo6/src/services/controllers/documents.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo6/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo6/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo6/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo6/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo6/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo6/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo6/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo6/.eslintrc.json')).toBeFalsy();
        expect(existsSync('./target/api-mongo6/jest.config.js')).toBeFalsy();
        
        
        const launch = JSON.parse(readFileSync('./target/api-mongo6/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/api-mongo6/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/api-mongo6/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/api-mongo6`);
    });

    it('create api-mongo7 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api-mongo7 --answers ${process.cwd()}/test/fixtures/answers/api-mongo7.json --no-install`,
        ]);
        expect(existsSync('./target/api-mongo7/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api-mongo7/src/index.d.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo7/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo7/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo7/src/services/controllers/documents.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo7/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo7/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo7/test/unit/mixins/mongodb.mixin.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo7/test/unit/services/routes.service.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo7/test/unit/utils/utils.spec.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo7/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo7/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo7/.eslintrc.json')).toBeFalsy();
        expect(existsSync('./target/api-mongo7/jest.config.js')).toBeTruthy();
        
        
        const launch = JSON.parse(readFileSync('./target/api-mongo7/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/api-mongo7/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/api-mongo7/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/api-mongo7`);
    });

    it('create api-mongo-only project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `moleculer init ${process.cwd()} api-mongo-only --answers ${process.cwd()}/test/fixtures/answers/api-mongo-only.json --no-install`,
        ]);
        expect(existsSync('./target/api-mongo-only/rest/node.http')).toBeTruthy();
        expect(existsSync('./target/api-mongo-only/src/index.d.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo-only/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo-only/src/services/routes.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo-only/src/services/controllers/documents.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo-only/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo-only/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/api-mongo-only/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo-only/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo-only/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo-only/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo-only/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/api-mongo-only/.eslintrc.json')).toBeFalsy();
        expect(existsSync('./target/api-mongo-only/jest.config.js')).toBeFalsy();
        
        
        const launch = JSON.parse(readFileSync('./target/api-mongo-only/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/api-mongo-only/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/api-mongo-only/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/api-mongo-only`);
    });
});