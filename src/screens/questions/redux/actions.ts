import * as types from './types';

export const callSaveName = (name: string) => ({
  type: types.SAVE_NAME,
  payload: name
})