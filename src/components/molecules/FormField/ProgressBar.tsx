import { ColorValue, View, ViewStyle } from 'react-native';
import React from 'react';
import { makeStyles } from '@/theme';
import { Text } from '../../atoms';

type ProgressBarProps = {
	label?: string;
	progress?: number;
	color?: ColorValue;
};

export const ProgressBar = (props: ProgressBarProps) => {
	const { styles, colors } = useStyles();
	const { label = '', progress = 100, color = colors.border } = props;

	const $barStyle = {
		position: 'absolute',
		width: `${progress}%`,
		backgroundColor: color,
		height: 1,
	} as ViewStyle;

	const nullBarStyle = {
		position: 'absolute',
		width: '100%',
		backgroundColor: colors.palette.neutral100P42,
		height: 1,
	} as ViewStyle;

	return (
		<View>
			<View style={nullBarStyle} />
			<View style={$barStyle} />
			<Text preset="formLabel" style={[styles.labelStyle, { color }]}>
				{label}
			</Text>
		</View>
	);
};

const useStyles = makeStyles(() => ({
	labelStyle: {
		textAlign: 'right',
		paddingTop: 11,
	},
}));
