const initialState = { favorites: [] };

const manageFavoriteCharacters = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case "TOGGLE_FAVORITE_CHARACTERS":
      if (state.favorites.length === 0) {
        // premier favoris
        nextState = {
          ...state,
          favorites: [...state.favorites, action.value],
        };
        return nextState || state;
      }
      for (let i = 0; i <= state.favorites.length; i++) {
        // boucle déclenché si déjà au moins 1 favoris
        if (i === state.favorites.length) {
          // ajout de favoris
          nextState = {
            ...state,
            favorites: [...state.favorites, action.value],
          };
          break;
        } else if (state.favorites[i].id === action.value.id) {
          // suppression de favoris
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

export default manageFavoriteCharacters;
