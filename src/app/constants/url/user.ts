export const basePath = '/auditor';

const applyBaseUrl = (url: string): string => `${basePath}/${url}`;

export const homePath: string = applyBaseUrl('home');
