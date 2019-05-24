import qs from 'qs';

const SWAPI_URL = 'https://swapi.co/api';

export type ApiCharacter = {
  name: string;
  height: string;
  mass: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created: string;
  edited: string;
  url: string;
};

export type SWAPI = {
  getCharacter: (id: number) => Promise<ApiCharacter>;
  getCharacterList: (
    search: string
  ) => Promise<{ results: ApiCharacter[]; count: number; next: string | null; previous: string | null }>;
};

export const swAPI: SWAPI = {
  getCharacter: id => fetch(`${SWAPI_URL}/people/${id}`).then(response => response.json()),
  getCharacterList: search =>
    fetch(`${SWAPI_URL}/people${qs.stringify({ search }, { addQueryPrefix: true })}`).then(response => response.json()),
};
