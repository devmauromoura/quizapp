import * as types from '../../screens/questions/redux/types';
import {all, take, takeLatest, put} from 'redux-saga/effects';

import {saveNameReducer, navigateQuestions, saveResponseCorrect, saveResponseIncorrect, navigateFinish} from '../../screens/questions/redux/sagaMiddleware';

function* rootSaga() {
  return yield all([
    yield takeLatest(types.SAVE_NAME, saveNameReducer),
    yield takeLatest(types.SAVE_NAME_SUCCESS, navigateQuestions),
    yield takeLatest(types.SAVE_RESPONSE_CORRECT, saveResponseCorrect),
    yield takeLatest(types.SAVE_RESPONSE_INCORRECT, saveResponseIncorrect),
    yield takeLatest(types.FINISH, navigateFinish)
  ]);
}

export default rootSaga;