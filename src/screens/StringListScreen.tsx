import React, { FC } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AddString from '../components/AddString';
import { selectElementIds } from '../store/strings/selectors';
import StringItem from '../components/StringItem';

const StringListScreen: FC = () => {
	const elementIds = useSelector(selectElementIds);
	return (
		<SafeAreaView style={styles.container}>
			<AddString />
			<FlatList
				data={elementIds}
				keyExtractor={id => id.toString()}
				renderItem={({ item }) => <StringItem id={item} />}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f0f0f0',
		flex: 1,
		padding: 20,
		width: '100%',
	},
});

export default StringListScreen;
