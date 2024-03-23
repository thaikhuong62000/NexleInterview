import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { makeStyles } from '@/theme';
import { Icon, Text } from '../atoms';

type CheckboxProps = {
	content: string;
	checked: boolean;
	onPress: () => void;
};

export const Checkbox = ({ content, checked, onPress }: CheckboxProps) => {
	const { styles } = useStyles();

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.checkbox} onPress={onPress}>
				{checked && <Icon icon="check" />}
			</TouchableOpacity>
			<Text style={styles.text}>{content}</Text>
		</View>
	);
};

const useStyles = makeStyles(({ colors }) => ({
	container: {
		flexDirection: 'row',
		paddingTop: 23,
	},
	checkbox: {
		width: 23,
		height: 23,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: colors.palette.primary100,
		borderWidth: 1,
	},
	text: {
		marginLeft: 8,
	},
}));
