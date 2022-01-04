import { Store, combineReducers, createStore, applyMiddleware } from 'redux';
import stringsReducer from './strings/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from './types';

const storeData = async (key: string, value: string) => {
	try {
		await AsyncStorage.setItem(key.toString(), value);
	} catch (error) {
		console.log('🚀 ~ file: configureStore.ts ~ line 11 ~ storeData ~ error : ', error);
	}
};

const getData = async (name: string) => {
	try {
		const value = await AsyncStorage.getItem(name);
		if (value !== null) {
			return parseInt(value);
		}
	} catch (error) {
		console.log('🚀 ~ file: configureStore.ts ~ line 25 ~ getData ~ error : ', error);
	}
};

const rootReducer = combineReducers<RootState>({
	elements: stringsReducer,
});

const customMiddleWare = store => next => action => {
	storeData(action.idMax, action.payload);
	storeData('idMax', action.idMax);
	next(action);
};

const configureStore = (): Store => {
	return createStore(rootReducer, applyMiddleware(customMiddleWare));
};

export default configureStore;
