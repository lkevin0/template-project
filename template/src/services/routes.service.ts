import type { GatewaySettingSchema } from '../index.d';
import type { ServiceSchema } from 'moleculer';
import { createSecureContext } from 'tls';
import moleculerWeb from 'moleculer-web';
import { readFileSync } from 'fs-extra';
import { sync } from 'find-up';

// @ts-ignore
const pkg = JSON.parse(readFileSync(sync('package.json')));

{{#useLint}}
/* eslint-disable sort-keys */
{{/useLint}}
const serviceSchema: ServiceSchema<GatewaySettingSchema> = {
  name: 'routes',
  version: pkg.version,
  settings: {
    $noVersionPrefix: false,
    https:
      process.env.CERT_FILE !== undefined &&
      process.env.PRIVKEY_FILE !== undefined
        ? {
            cert: readFileSync(process.env.CERT_FILE),
            key: readFileSync(process.env.PRIVKEY_FILE),
            secureContext: createSecureContext({
              maxVersion: 'TLSv1.3',
              minVersion: 'TLSv1.2',
            }),
          }
        : undefined,
    logResponseData: 'debug',
    routes: [
      {
        path: '/node/health',
        aliases: {
          'GET /': '$node.health',
        },
        mappingPolicy: 'restrict',
      },
    ],
  },
  mixins: [moleculerWeb],
};

export = serviceSchema;
