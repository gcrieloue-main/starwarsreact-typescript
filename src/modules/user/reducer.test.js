import { userReducer, initialState } from './reducer';
import { setCharacter } from './actions';

describe('User Reducer', () => {
  it('sets character correctly', () => {
    const character = { name: 'luke' };
    const state = userReducer(initialState, setCharacter(character));
    expect(state.character).toBe(character);
  });

  it('sets character loading', () => {});
});
