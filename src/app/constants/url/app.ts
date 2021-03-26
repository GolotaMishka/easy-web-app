export const appBasePath = '/app';
export const publicPath = '/public';

const applyBaseUrl = (url: string): string => `${appBasePath}/${url}`;
const applyPublicUrl = (url: string): string => `${publicPath}/${url}`;

// public
export const homePath: string = applyPublicUrl('home');
export const signInPath: string = applyPublicUrl('sign-in');
export const signUpPath: string = applyPublicUrl('sign-up');

// private
export const knowledgePath: string = applyBaseUrl('knowledge');
export const interviewPath: string = applyBaseUrl('interview');
export const vacanciesPath: string = applyBaseUrl('vacancies');
export const resumePath: string = applyBaseUrl('resume');
export const trajectoryPath: string = applyBaseUrl('trajectory');
export const profilePath: string = applyBaseUrl('profile');
