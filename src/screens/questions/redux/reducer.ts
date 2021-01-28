import { IState } from "./typescript";
import * as types from './types';

const initialState:IState = {
  response: [],
  name: ''
};

export const QuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_NAME_SUCCESS:
      return {
        ...state,
        name: action.payload
      };
      
    case types.SAVE_RESPONSE:
      return {
        ...state,
        response: [...state.response, action.payload]
      };
    default:
      return state;
  }
};
