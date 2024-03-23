import React from 'react';
import {
	StyleProp,
	Text as RNText,
	TextProps as RNTextProps,
	TextStyle,
} from 'react-native';
import { GlobalTypography, makeStyles } from '@/theme';

type Sizes = keyof typeof $sizeStyles;
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
	 * Text size modifier.
	 */
	size?: Sizes;
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
	const {
		weight,
		size,
		text,
		children,
		style: $styleOverride,
		...rest
	} = props;

	const { styles } = useStyles();

	const content = text || children;

	const preset: Presets = props.preset ?? 'default';
	const $mergedStyle: StyleProp<TextStyle> = [
		styles[preset],
		weight && GlobalTypography.primary[weight],
		size && $sizeStyles[size],
		$styleOverride,
	];

	return (
		<RNText {...rest} style={$mergedStyle}>
			{content}
		</RNText>
	);
}

const $sizeStyles = {
	xxl: { fontSize: 36, lineHeight: 44 } satisfies TextStyle,
	xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
	lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
	md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
	sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
	xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
	xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
};

const useStyles = makeStyles(({ colors, typo }) => ({
	default: {
		...$sizeStyles.sm,
		...typo.primary.normal,
		color: colors.text,
	},
	bold: {
		...$sizeStyles.sm,
		...typo.primary.bold,
		color: colors.text,
	},
	heading: {
		...$sizeStyles.xxl,
		...typo.primary.bold,
		color: colors.text,
	},
	subheading: {
		...$sizeStyles.lg,
		...typo.primary.medium,
		color: colors.text,
	},
	formLabel: {
		...$sizeStyles.sm,
		...typo.primary.medium,
		color: colors.text,
	},
	formHelper: {
		...$sizeStyles.sm,
		...typo.primary.normal,
		color: colors.text,
	},
	error: {
		...$sizeStyles.sm,
		...typo.primary.normal,
		color: colors.error,
	},
}));
