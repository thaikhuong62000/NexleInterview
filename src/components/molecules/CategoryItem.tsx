import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { makeStyles } from '@/theme';
import { Text } from '../atoms';

type Props = {
	value?: string;
	isSelected?: boolean;
	setSelected?: (value: string) => void;
};

const Transparent = ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'];
const Gradient = ['#8A32A9', '#8A00FF'];

export const CategoryItem = ({ value, isSelected, setSelected }: Props) => {
	const { styles } = useStyles();

	if (value == null) {
		return <View style={styles.emptyContainer} />;
	}

	const onPress = () => {
		setSelected?.(value);
	};

	return (
		<LinearGradient
			colors={isSelected ? Gradient : Transparent}
			start={{ x: 0, y: 1.1 }}
			end={{ x: 0.5, y: 0 }}
			style={styles.gradientContainer}
		>
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<Text>{value}</Text>
			</TouchableOpacity>
		</LinearGradient>
	);
};

const useStyles = makeStyles(({ colors }) => ({
	gradientContainer: {
		width: 109,
		height: 71,
		borderRadius: 8,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: colors.palette.neutral100P12,
	},
	container: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyContainer: {
		width: 109,
		height: 71,
	},
}));
