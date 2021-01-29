import * as types from './types';
import {call, put} from 'redux-saga/effects';
import * as RootNavigation from '../../../navigation/navigationActions';

//Salva no reducer o nome informado. 
export function* saveNameReducer(action) {
  yield put({
    type: types.SAVE_NAME_SUCCESS,
    payload: action.payload
  });
}
//Quando salva o nome com sucesso, navega até a tela de questões.
export function* navigateQuestions(){
  yield call(() => RootNavigation.navigate('Questions'))
}

export function* saveResponseCorrect() {
  yield put({type: types.SAVE_RESPONSE_CORRECT_SUCCESS});
}

export function* saveResponseIncorrect() {
  yield put({type: types.SAVE_RESPONSE_INCORRECT_SUCCESS});
}

export function* navigateFinish(){
  yield call(() => RootNavigation.navigate('Initial'))
}