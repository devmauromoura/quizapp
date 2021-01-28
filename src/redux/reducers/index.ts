import {QuestionReducer} from '../../screens/questions/redux/reducer';

import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  Question: QuestionReducer
});