export const paginatedPath = (path: string) => (page: number | string): string => `${path}/page/${page}`;
