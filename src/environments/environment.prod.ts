import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'WhyzrAnt',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44319',
    redirectUri: baseUrl,
    clientId: 'WhyzrAnt_App',
    responseType: 'code',
    scope: 'offline_access WhyzrAnt',
  },
  apis: {
    default: {
      url: 'https://localhost:44319',
      rootNamespace: 'WhyzrAnt',
    },
  },
} as Environment;
