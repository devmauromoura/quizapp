import { IState } from "./typescript";
import * as types from './types';

const initialState:IState = {
  name: '',
  correct: 0,
  incorrect: 0
};

export const QuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_NAME_SUCCESS:
      return {
        ...state,
        name: action.payload
      };
      
    case types.SAVE_RESPONSE_CORRECT_SUCCESS:
      return {
        ...state,
        correct: state.correct + 1
      };

    case types.SAVE_RESPONSE_INCORRECT_SUCCESS:
      return {
        ...state,
        incorrect: state.incorrect + 1
      };

      case types.FINISH:
      return initialState;
    default:
      return state;
  }
};
