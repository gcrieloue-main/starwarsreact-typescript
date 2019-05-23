import qs from 'qs';

const SWAPI_URL = 'https://swapi.co/api';

export type SWAPI = {
  getCharacter: (id: string) => Promise<any>;
  getCharacterList: (search: string) => Promise<any>;
};

export const swAPI: SWAPI = {
  getCharacter: id => fetch(`${SWAPI_URL}/people/${id}`).then(response => response.json()),
  getCharacterList: search =>
    fetch(`${SWAPI_URL}/people${qs.stringify({ search }, { addQueryPrefix: true })}`).then(response => response.json()),
};
