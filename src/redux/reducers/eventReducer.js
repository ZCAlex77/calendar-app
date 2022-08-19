import { ADD_EVENT, REMOVE_EVENT } from '../actionTypes';
import dateUtility from '../../utility/dateUtility';

let initialState = JSON.parse(localStorage.getItem('events')) ?? [];
if (initialState.length) {
  // for each date saved as text, create a new Date object
  initialState.forEach((event) => (event.date = new Date(event.date)));

  // delete events from past days
  initialState = initialState.filter(
    (event) => dateUtility.compareToToday(event.date) !== 0
  );
  localStorage.setItem('events', JSON.stringify(initialState));
}

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
