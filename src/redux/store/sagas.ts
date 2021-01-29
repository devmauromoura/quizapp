import * as types from '../../screens/questions/redux/types';
import {all, take, takeLatest, put} from 'redux-saga/effects';

import {saveNameReducer, navigateQuestions} from '../../screens/questions/redux/sagaMiddleware';

function* rootSaga() {
  return yield all([
    yield takeLatest(types.SAVE_NAME, saveNameReducer),
    yield takeLatest(types.SAVE_NAME_SUCCESS, navigateQuestions)
  ]);
}

export default rootSaga;