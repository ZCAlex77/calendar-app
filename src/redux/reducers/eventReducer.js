import { ADD_EVENT, REMOVE_EVENT } from '../actionTypes';

let initialState = JSON.parse(localStorage.getItem('events')) ?? [];
if (initialState.length)
  initialState.forEach((event) => (event.date = new Date(event.date)));

// TODO: Filter past events

export const eventReducer = (state = initialState, action) => {
  const updateStorage = (newState) =>
    localStorage.setItem('events', JSON.stringify(newState));

  switch (action.type) {
    case ADD_EVENT:
      let stateAfterAdd = [...state, action.payload];
      updateStorage(stateAfterAdd);
      return stateAfterAdd;
    case REMOVE_EVENT:
      let stateAfterRemove = state.filter((el) => el.id !== action.payload);
      updateStorage(stateAfterRemove);
      return stateAfterRemove;
    default:
      return state;
  }
};
