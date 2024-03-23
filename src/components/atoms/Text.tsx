import React from 'react';
import {
	StyleProp,
	Text as RNText,
	TextProps as RNTextProps,
	TextStyle,
} from 'react-native';
import { GlobalTypography, makeStyles } from '@/theme';

type Weights = keyof typeof GlobalTypography.primary;
type Presets = keyof ReturnType<typeof useStyles>['styles'];

export interface TextProps extends RNTextProps {
	/**
	 * The text to display if not using `tx` or nested components.
	 */
	text?: string;
	/**
	 * An optional style override useful for padding & margin.
	 */
	style?: StyleProp<TextStyle>;
	/**
	 * One of the different types of text presets.
	 */
	preset?: Presets;
	/**
	 * Text weight modifier.
	 */
	weight?: Weights;
	/**
	 * Children components.
	 */
	children?: React.ReactNode;
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Text.md)
 */
export function Text(props: TextProps) {
	const { weight, text, children, style: $styleOverride, ...rest } = props;

	const { styles } = useStyles();

	const content = text || children;

	const preset: Presets = props.preset ?? 'default';
	const $mergedStyle: StyleProp<TextStyle> = [
		styles[preset],
		weight && GlobalTypography.primary[weight],
		$styleOverride,
	];

	return (
		<RNText {...rest} style={$mergedStyle}>
			{content}
		</RNText>
	);
}

const useStyles = makeStyles(({ colors, typo }) => ({
	default: {
		fontSize: 14,
		lineHeight: 22.68,
		...typo.primary.normal,
		color: colors.text,
	},
	heading: {
		fontSize: 22,
		lineHeight: 26.4,
		...typo.primary.normal,
		color: colors.text,
	},
	formLabel: {
		fontSize: 12,
		lineHeight: 14.4,
		...typo.primary.normal,
		color: colors.palette.neutral100P50,
	},
	formValue: {
		fontSize: 16,
		lineHeight: 19.2,
		...typo.primary.normal,
		color: colors.text,
	},
	formHelper: {
		fontSize: 12,
		lineHeight: 19.44,
		...typo.primary.normal,
		color: colors.text,
	},
	error: {
		fontSize: 12,
		lineHeight: 14.4,
		...typo.primary.normal,
		color: colors.error,
	},
}));
