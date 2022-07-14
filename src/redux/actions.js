import { ADD_EVENT, REMOVE_EVENT } from './actionTypes';
export const addEvent = event => ({type: ADD_EVENT, payload: event});
export const removeEvent = id => ({type: REMOVE_EVENT, payload: id});