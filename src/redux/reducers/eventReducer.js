import { ADD_EVENT, REMOVE_EVENT } from "../actionTypes";

let date = new Date(Date.now());
let initialState = JSON.parse(localStorage.getItem("events"));
if (!initialState) initialState = [];
else initialState = initialState.filter((el) => el.date.day >= date.getDate());

export const eventReducer = (state = initialState, action) => {
  const updateStorage = (newState) =>
    localStorage.setItem("events", JSON.stringify(newState));
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
