import { swAPI, ApiCharacter } from '../swapi';

export const setCharacter = (character: ApiCharacter) => ({
  type: 'SET_CHARACTER' as 'SET_CHARACTER',
  character,
});

export const setCharacterLoading = (loading: boolean) => ({
  type: 'SET_CHARACTER_LOADING' as 'SET_CHARACTER_LOADING',
  loading,
});

export const simpleActions = { setCharacter, setCharacterLoading };

export const fetchAndSetCharacter = (id: number) => (dispatch: any) => {
  dispatch(setCharacterLoading(true));
  swAPI
    .getCharacter(id)
    .then(character => {
      dispatch(setCharacterLoading(false));
      dispatch(setCharacter(character));
    })
    .catch(() => dispatch(setCharacterLoading(false)));
};
