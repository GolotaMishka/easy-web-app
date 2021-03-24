export const appBasePath = '/app';
export const publicPath = '/public';

const applyBaseUrl = (url: string): string => `${appBasePath}/${url}`;
const applyPublicUrl = (url: string): string => `${publicPath}/${url}`;

// public
export const homePath: string = applyPublicUrl('home');
export const signInPath: string = applyPublicUrl('sign-in');
export const signUpPath: string = applyPublicUrl('sign-up');

// private
export const learningPath: string = applyBaseUrl('learning');
