const exeq = require('exeq');
const { existsSync, readFileSync } = require('fs');
const rimraf = require('rimraf');

describe('create mongo project', () => {
    it('create mongo-all project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `./node_modules/.bin/moleculer init ${process.cwd()} mongo-all --answers ${process.cwd()}/test/fixtures/answers/mongo-all.json --no-install`,
        ]);
        expect(existsSync('./target/mongo-all/rest/node.http')).toBeFalsy();
        expect(existsSync('./target/mongo-all/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/mongo-all/src/services/routes.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-all/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-all/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/mongo-all/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/mongo-all/test/unit/mixins/mongodb.mixin.spec.ts')).toBeTruthy();
        expect(existsSync('./target/mongo-all/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-all/test/unit/utils/utils.spec.ts')).toBeTruthy();
        expect(existsSync('./target/mongo-all/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-all/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-all/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/mongo-all/jest.config.js')).toBeTruthy();
        expect(existsSync('./target/mongo-all/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/mongo-all/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/mongo-all/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/mongo-all/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/mongo-all`);
    });

    it('create mongo18 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `./node_modules/.bin/moleculer init ${process.cwd()} mongo18 --answers ${process.cwd()}/test/fixtures/answers/mongo18.json --no-install`,
        ]);
        expect(existsSync('./target/mongo18/rest/node.http')).toBeFalsy();
        expect(existsSync('./target/mongo18/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/mongo18/src/services/routes.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo18/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo18/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/mongo18/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/mongo18/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo18/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo18/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo18/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo18/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo18/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/mongo18/jest.config.js')).toBeFalsy();
        expect(existsSync('./target/mongo18/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/mongo18/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/mongo18/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/mongo18/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/mongo18`);
    });

    it('create mongo19 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `./node_modules/.bin/moleculer init ${process.cwd()} mongo19 --answers ${process.cwd()}/test/fixtures/answers/mongo19.json --no-install`,
        ]);
        expect(existsSync('./target/mongo19/rest/node.http')).toBeFalsy();
        expect(existsSync('./target/mongo19/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/mongo19/src/services/routes.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo19/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo19/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/mongo19/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/mongo19/test/unit/mixins/mongodb.mixin.spec.ts')).toBeTruthy();
        expect(existsSync('./target/mongo19/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo19/test/unit/utils/utils.spec.ts')).toBeTruthy();
        expect(existsSync('./target/mongo19/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo19/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo19/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/mongo19/jest.config.js')).toBeTruthy();
        expect(existsSync('./target/mongo19/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/mongo19/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/mongo19/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/mongo19/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/mongo19`);
    });

    it('create mongo20 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `./node_modules/.bin/moleculer init .. mongo20 --answers ${process.cwd()}/test/fixtures/answers/mongo20.json --no-install`,
        ]);
        expect(existsSync('./target/mongo20/rest/node.http')).toBeFalsy();
        expect(existsSync('./target/mongo20/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/mongo20/src/services/routes.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo20/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo20/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/mongo20/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/mongo20/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo20/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo20/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo20/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo20/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo20/.eslintrc.json')).toBeTruthy();
        expect(existsSync('./target/mongo20/jest.config.js')).toBeFalsy();
        expect(existsSync('./target/mongo20/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/mongo20/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/mongo20/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(2);

        const pkg = JSON.parse(readFileSync('./target/mongo20/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/mongo20`);
    });

    it('create mongo21 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `./node_modules/.bin/moleculer init ${process.cwd()} mongo21 --answers ${process.cwd()}/test/fixtures/answers/mongo21.json --no-install`,
        ]);
        expect(existsSync('./target/mongo21/rest/node.http')).toBeFalsy();
        expect(existsSync('./target/mongo21/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/mongo21/src/services/routes.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo21/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo21/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/mongo21/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/mongo21/test/unit/mixins/mongodb.mixin.spec.ts')).toBeTruthy();
        expect(existsSync('./target/mongo21/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo21/test/unit/utils/utils.spec.ts')).toBeTruthy();
        expect(existsSync('./target/mongo21/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo21/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo21/.eslintrc.json')).toBeFalsy();
        expect(existsSync('./target/mongo21/jest.config.js')).toBeTruthy();
        expect(existsSync('./target/mongo21/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/mongo21/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/mongo21/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/mongo21/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/mongo21`);
    });

    it('create mongo22 project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `./node_modules/.bin/moleculer init ${process.cwd()} mongo22 --answers ${process.cwd()}/test/fixtures/answers/mongo22.json --no-install`,
        ]);
        expect(existsSync('./target/mongo22/rest/node.http')).toBeFalsy();
        expect(existsSync('./target/mongo22/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/mongo22/src/services/routes.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo22/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo22/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/mongo22/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/mongo22/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo22/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo22/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo22/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo22/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo22/.eslintrc.json')).toBeFalsy();
        expect(existsSync('./target/mongo22/jest.config.js')).toBeFalsy();
        expect(existsSync('./target/mongo22/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/mongo22/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/mongo22/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/mongo22/package.json'));
        expect(pkg.prettier).toBeDefined();
        
        rimraf.sync(`${process.cwd()}/target/mongo22`);
    });

    it('create mongo-jest project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `./node_modules/.bin/moleculer init ${process.cwd()} mongo23 --answers ${process.cwd()}/test/fixtures/answers/mongo23.json --no-install`,
        ]);
        expect(existsSync('./target/mongo23/rest/node.http')).toBeFalsy();
        expect(existsSync('./target/mongo23/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/mongo23/src/services/routes.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo23/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo23/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/mongo23/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/mongo23/test/unit/mixins/mongodb.mixin.spec.ts')).toBeTruthy();
        expect(existsSync('./target/mongo23/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo23/test/unit/utils/utils.spec.ts')).toBeTruthy();
        expect(existsSync('./target/mongo23/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo23/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo23/.eslintrc.json')).toBeFalsy();
        expect(existsSync('./target/mongo23/jest.config.js')).toBeTruthy();
        expect(existsSync('./target/mongo23/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/mongo23/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(2);
        const tasks = JSON.parse(readFileSync('./target/mongo23/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/mongo23/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/mongo23`);
    });

    it('create mongo-only project', async () => {
        await exeq([
            `cd ${process.cwd()}/target`,
            `./node_modules/.bin/moleculer init ${process.cwd()} mongo-only --answers ${process.cwd()}/test/fixtures/answers/mongo-only.json --no-install`,
        ]);
        expect(existsSync('./target/mongo-only/rest/node.http')).toBeFalsy();
        expect(existsSync('./target/mongo-only/src/mixins/mongodb.mixin.ts')).toBeTruthy();
        expect(existsSync('./target/mongo-only/src/services/routes.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-only/src/services/controllers/documents.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-only/src/services/stores/documents-store.service.ts')).toBeTruthy();
        expect(existsSync('./target/mongo-only/src/utils/utils.ts')).toBeTruthy();
        expect(existsSync('./target/mongo-only/test/unit/mixins/mongodb.mixin.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-only/test/unit/services/routes.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-only/test/unit/utils/utils.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-only/src/services/calculator.service.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-only/test/unit/services/calculator.service.spec.ts')).toBeFalsy();
        expect(existsSync('./target/mongo-only/.eslintrc.json')).toBeFalsy();
        expect(existsSync('./target/mongo-only/jest.config.js')).toBeFalsy();
        expect(existsSync('./target/mongo-only/src/index.d.ts')).toBeFalsy();
        
        const launch = JSON.parse(readFileSync('./target/mongo-only/.vscode/launch.json'));
        expect(launch.configurations.length).toBe(1);
        const tasks = JSON.parse(readFileSync('./target/mongo-only/.vscode/tasks.json'));
        expect(tasks.tasks.length).toBe(1);

        const pkg = JSON.parse(readFileSync('./target/mongo-only/package.json'));
        expect(pkg.prettier).toBeUndefined();
        
        rimraf.sync(`${process.cwd()}/target/mongo-only`);
    });
});