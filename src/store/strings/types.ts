export const ADD_ELEMENT = 'ADD_ELEMENT';

export interface Element {
	id: string;
	text: string;
}

interface AddElementAction {
	type: typeof ADD_ELEMENT;
	payload: string;
	idMax: string;
}

export type ElementActionTypes = AddElementAction;
