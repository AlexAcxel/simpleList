import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import StringListScreen from './screens/StringListScreen';

const store = configureStore();

const App: FC = () => {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<StringListScreen />
			</View>
		</Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
