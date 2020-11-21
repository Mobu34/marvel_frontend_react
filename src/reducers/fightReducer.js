const initialState = { fighter1: {}, fighter2: {} };

const setupFight = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case "TOGGLE_PARTICIPANT":
      if (state.fighter1.id === action.value.id) {
        nextState = {
          ...state,
          fighter1: {},
        };
      } else if (state.fighter2.id === action.value.id) {
        nextState = {
          ...state,
          fighter2: {},
        };
      } else if (
        Object.keys(state.fighter1).length === 0 ||
        Object.keys(state.fighter2).length === 0
      ) {
        if (Object.keys(state.fighter1).length === 0) {
          nextState = {
            ...state,
            fighter1: action.value,
          };
        } else if (Object.keys(state.fighter2).length === 0) {
          nextState = {
            ...state,
            fighter2: action.value,
          };
        }
      }
      return nextState || state;

    // if (Object.keys(state.fighter1).length === 0) {
    //   console.log("ajout en 1");
    //   nextState = {
    //     ...state,
    //     fighter1: action.value,
    //   };
    //   return nextState || state;
    // } else if (Object.keys(state.fighter2).length === 0) {
    //   console.log("ajout en 2");
    //   nextState = {
    //     ...state,
    //     fighter2: action.value,
    //   };
    //   return nextState || state;
    // } else if (Object.keys(state.fighter1).length > 0) {
    //   console.log("suppression en 1");
    //   nextState = {
    //     ...state,
    //     fighter1: {},
    //   };
    //   return nextState || state;
    // } else if (Object.keys(state.fighter2).length > 0) {
    //   console.log("suppression en 2");
    //   nextState = {
    //     ...state,
    //     fighter1: {},
    //   };
    //   return nextState || state;
    // }

    // case "DELETE_PARTICIPANT":
    //   if (state.fighter1.indexOf(action.value) !== -1) {
    //     state.fighter1.splice(state.fighter1.indexOf(action.value), 1);
    //     nextState = {
    //       ...state,
    //       fighter1: [...state.fighter1],
    //     };
    //   } else {
    //     state.fighter2.splice(state.fighter2.indexOf(action.value), 1);
    //     nextState = {
    //       ...state,
    //       fighter2: [...state.fighter2],
    //     };
    //   }
    //   return nextState || state;

    case "CANCEL_FIGHT":
      nextState = {
        ...state,
        fighter1: {},
        fighter2: {},
      };
      return nextState || state;

    default:
      return state;
  }
};

export default setupFight;
