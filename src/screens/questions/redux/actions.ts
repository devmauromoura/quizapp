import * as types from './types';
import { action } from 'typesafe-actions';

export const callSaveName = (name: string) => action(types.SAVE_NAME, name) ;
