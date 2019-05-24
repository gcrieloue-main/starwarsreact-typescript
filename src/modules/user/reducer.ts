import { simpleActions } from './actions';
import { ApiCharacter } from '../swapi';

export type UserStore = {
  character: ApiCharacter | null;
  characterLoading: boolean;
};

export const initialState: UserStore = {
  character: null,
  characterLoading: false,
};

// export type UserAction = ReturnType<typeof setCharacter> | ReturnType<typeof setCharacterLoading>;
export type UserAction = ReturnType<typeof simpleActions[keyof typeof simpleActions]>;

export const userReducer = (state = initialState, action: UserAction): UserStore => {
  switch (action.type) {
    case 'SET_CHARACTER': {
      return { ...state, character: action.character };
    }
    case 'SET_CHARACTER_LOADING': {
      return { ...state, characterLoading: !!action.loading };
    }
    default:
      return state;
  }
};
