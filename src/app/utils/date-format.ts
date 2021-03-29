import { format } from 'date-fns';

export const fullDate = (date) => (date ? format(new Date(date), 'yyyy-MM-dd') : date);
export const shortDate = (date) => format(new Date(date), 'dd MMMM');
