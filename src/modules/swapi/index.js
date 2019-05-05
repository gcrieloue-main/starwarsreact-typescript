const SWAPI_URL = 'https://swapi.co/api';

export const swAPI = {
  getCharacter: id => fetch(`${SWAPI_URL}/people/${id}`).then(response => response.json()),
};
