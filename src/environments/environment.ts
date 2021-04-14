import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'WhyzrAnt',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://whyzr-staging1.azurewebsites.net',
    redirectUri: baseUrl,
    clientId: 'WhyzrAnt_App',
    scope: 'offline_access openid profile role email phone WhyzrAnt',
    requireHttps: true,
    dummyClientSecret: '1q2w3e*',
  },
  apis: {
    default: {
      url: 'https://whyzr-staging1.azurewebsites.net',
      rootNamespace: 'WhyzrAnt',
    },
  },
} as Environment;