import { createStore } from 'redux';
import { eventReducer } from './reducers/eventReducer';

export default createStore(eventReducer);