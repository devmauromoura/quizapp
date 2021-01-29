import * as types from './types';
import { action } from 'typesafe-actions';

export const callSaveName = (name: string) => action(types.SAVE_NAME, name);
export const callSaveResponseCorrect = () => action(types.SAVE_RESPONSE_CORRECT);
export const callSaveResponseIncorrect = () => action(types.SAVE_RESPONSE_INCORRECT);
export const callFinish = () => action(types.FINISH);
