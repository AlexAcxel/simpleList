import { RootState } from '../types';
import { Element } from './types';

export const selectElements = (state: RootState): Element[] => state.elements;

export const selectElementIds = (state: RootState): number[] => state.elements.map(element => element.id);

export const selectIdMax = (state: RootState): number => {
	const idMax: any = Math.max(...selectElementIds(state));
	if (idMax == '-Infinity') {
		return 0;
	} else {
		return idMax;
	}
};

export const selectElementById = (state: RootState, id: string): Element | 0 => {
	const element: Element = state.elements.find(element => element.id === id);
	if (element) {
		return element;
	} else {
		return 0;
	}
};
