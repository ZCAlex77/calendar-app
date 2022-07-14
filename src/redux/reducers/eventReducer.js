import { ADD_EVENT, REMOVE_EVENT } from '../actionTypes';

const initialState = [];

export const eventReducer = (state = initialState, action) =>{
  switch(action.type){
    case ADD_EVENT:
      return [...state, action.payload];
    case REMOVE_EVENT:
      return state.filter(el => el.id !== action.payload);
    default:
      return state;
  }
}