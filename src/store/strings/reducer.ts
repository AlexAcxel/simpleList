import { ADD_ELEMENT, Element, ElementActionTypes } from './types';

const initialState: Element[] = [];

const stringsReducer = (state = initialState, action: ElementActionTypes): Element[] => {
	switch (action.type) {
		case ADD_ELEMENT:
			return [
				{
					id: action.idMax,
					text: action.payload,
				},
				...state,
			];
		default:
			return state;
	}
};

export default stringsReducer;
