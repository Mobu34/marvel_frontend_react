const initialState = { favorites: [] };

const manageFavoriteComics = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case "TOGGLE_FAVORITE_COMICS":
      if (state.favorites.length === 0) {
        nextState = {
          ...state,
          favorites: [...state.favorites, action.value],
        };
        return nextState || state;
      }
      for (let i = 0; i <= state.favorites.length; i++) {
        if (i === state.favorites.length) {
          nextState = {
            ...state,
            favorites: [...state.favorites, action.value],
          };
          break;
        } else if (state.favorites[i].id === action.value.id) {
          state.favorites.splice(i, 1);
          nextState = {
            ...state,
            favorites: [...state.favorites],
          };
          break;
        }
      }
      return nextState || state;

    default:
      return state;
  }
};

export default manageFavoriteComics;
