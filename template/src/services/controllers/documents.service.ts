import { ServiceSchema } from 'moleculer';

const serviceSchema: ServiceSchema = {
  name: 'documents',
  version: '1.0.0',
  settings: {
    $noVersionPrefix: false,
  },
};

export = serviceSchema;
