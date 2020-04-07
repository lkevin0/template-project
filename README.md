

# Moleculer template
:mortar_board: Moleculer-based microservices project template.

![Node.js CI](https://github.com/lkevin0/template-project/workflows/Node.js%20CI/badge.svg)

## Features
- Moleculer v0.14
- MongoDB Mixin.
- Optional API Gateway service with detailed service settings.
- Optional Transporter & Cacher.
- Unit tests with [Jest](http://facebook.github.io/jest/).
- Lint with [ESLint](http://eslint.org/).
- Launch file for debugging in [VSCode](https://code.visualstudio.com/).


## Install
To install use the [moleculer-cli](https://github.com/moleculerjs/moleculer-cli) tool.

```bash
$ moleculer init quezt/moleculer-project my-project
```

## Prompts
```
$ moleculer init quezt/moleculer-project my-project

Template repo: quezt/moleculer-project
? Add API Gateway (moleculer-web) service? Yes
? Would you like to communicate with other nodes? Yes
? Connect to MongoDB? No
? Use ESLint to lint your code? Yes
? Use prettier to format your code? Yes
? Setup unit tests with Jest? Yes
Create 'my-project' folder...
? Would you like to run 'npm install'? Yes
```

## Services
- **api**: API Gateway services.
- **calculator**: Calculator service.
- **documents**: Documents Controller service.
- **documents-store**: Sample DB service. To use with MongoDB, set MONGODB_URI environment variables and install MongoDB adapter with yarn add moleculer-db-adapter-mongo.

## Mixins
- **mongodb.mixin**: Database access mixin for services. Based on [moleculer-db](https://github.com/moleculerjs/moleculer-db#readme)

## Useful links

* Moleculer website: https://moleculer.services/
* Moleculer Documentation: https://moleculer.services/docs/0.14/

## License
moleculer-project is available under the [MIT license](https://tldrlegal.com/license/mit-license).
