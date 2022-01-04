import React, { useEffect, useState } from 'react';
import { addElement } from '../store/strings/actions';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const AddString: React.FunctionComponent = state => {
	const [stringText, setStringText] = useState('');
	const [idMax, setIdMax] = useState(0);
	const dispatch = useDispatch();
	const handleSubmit = () => {
		if (!stringText) return;
		dispatch(addElement(idMax.toString(), stringText));
		setIdMax(idMax + 1);
		setStringText('');
	};

	useEffect(() => {
		const asyncWrap = async () => {
			const idMaxSaved = await AsyncStorage.getItem('idMax');
			console.log('🚀 ~ file: AddString.tsx ~ line 21 ~ asyncWrap ~ idMaxSaved', idMaxSaved);
			setIdMax(parseInt(idMaxSaved));
		};
		asyncWrap();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Simple list</Text>
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={text => setStringText(text)}
					value={stringText}
					style={styles.input}
					onSubmitEditing={handleSubmit}
					placeholder="New String"
				/>
			</View>

			<TouchableOpacity activeOpacity={0.8} onPress={handleSubmit} style={styles.buttonContainer}>
				<Text style={styles.buttonText}>Add String</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		width: '100%',
	},
	title: {
		fontSize: 22,
		fontWeight: '600',
		marginBottom: 10,
	},
	text: {
		fontSize: 20,
		fontWeight: '800',
	},
	inputContainer: {
		marginVertical: 10,
		paddingHorizontal: 15,
		width: '100%',
		backgroundColor: 'white',
	},
	input: {
		fontSize: 18,
		width: '100%',
	},
	buttonContainer: {
		alignItems: 'center',
		borderRadius: 25,
		padding: 10,
		backgroundColor: 'green',
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
	},
});

export default AddString;
