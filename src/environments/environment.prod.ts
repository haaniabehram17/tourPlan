export const environment = {
  production: true,
  apiUrl: window["env"]["apiUrl"] || 'https://customer-portal.api.ptc-telematik.de/api/v1',
  apiBaseUrl: window["env"]["apiBaseUrl"] || 'https://ptc-online.de:8443/CustomerDetails.svc/'
};
