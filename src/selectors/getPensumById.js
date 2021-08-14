import { pensumList } from '../data/dataFacultad';

export const getPensumById = (id) =>
    pensumList.find((pesum) => pesum.id === id);
