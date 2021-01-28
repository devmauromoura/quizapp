import * as types from './types';
import {all, take, takeLatest, put} from 'redux-saga/effects';

//Salva no reducer o nome informado. 
function* saveNameReducer(action) {
  yield put({
    type: types.SAVE_NAME_SUCCESS,
    payload: action.payload
  });
}

function* QuestionMiddleware() {
  return yield all([
    yield takeLatest(types.SAVE_NAME, saveNameReducer)
  ]);
}

export default QuestionMiddleware;