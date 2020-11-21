const initialState = { teamA: [], teamB: [] };

const setupFight = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case "ADD_PARTICIPANT":
      if (state.teamA.length <= state.teamB.length) {
        nextState = {
          ...state,
          teamA: [...state.teamA, action.value],
        };
      } else {
        nextState = {
          ...state,
          teamB: [...state.teamB, action.value],
        };
      }
      return nextState || state;

    case "DELETE_PARTICIPANT":
      if (state.teamA.indexOf(action.value) !== -1) {
        state.teamA.splice(state.teamA.indexOf(action.value), 1);
        nextState = {
          ...state,
          teamA: [...state.teamA],
        };
      } else {
        state.teamB.splice(state.teamB.indexOf(action.value), 1);
        nextState = {
          ...state,
          teamB: [...state.teamB],
        };
      }
      return nextState || state;

    default:
      return state;
  }
};

export default setupFight;
