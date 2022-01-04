import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectElementById } from '../store/strings/selectors';
import { RootState } from '../store/types';

interface StringItemProps {
	id: number;
}

const StringItem: React.FC<StringItemProps> = ({ id }) => {
	const stringItem = useSelector((state: RootState) => selectElementById(state, id));

	return stringItem ? (
		<View style={styles.container}>
			<Text style={styles.text}>{stringItem.text}</Text>
		</View>
	) : null;
};

const styles = StyleSheet.create({
	container: {
		padding: 5,
		width: '100%',
	},
	text: {
		fontSize: 18,
	},
});

export default StringItem;
