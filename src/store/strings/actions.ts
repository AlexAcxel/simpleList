import { ADD_ELEMENT, ElementActionTypes } from './types';

export const addElement = (idMax: string, element: string): ElementActionTypes => ({
	type: ADD_ELEMENT,
	idMax: idMax,
	payload: element,
});
