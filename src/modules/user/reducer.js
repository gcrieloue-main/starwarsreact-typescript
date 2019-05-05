const initialState = {
  character: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHARACTER': {
      return { ...state, character: action.character };
    }
    default:
      return state;
  }
};
