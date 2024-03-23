/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { InputStyle } from '@/types';

import { StyleSheet } from 'react-native';
import { scale } from './dimensionManager';
import { GlobalColors } from '../colors';
import { GlobalSpacing } from '../spacing';
import { GlobalTypography } from '../typography';

const objectColorMode = (object: InputStyle): InputStyle => {
	return Object.entries(object).reduce(
		(result: { [x: string]: unknown }, [key, value]) => {
			const skipChangeColorOrScaleSize = key?.[0] === '_';

			if (skipChangeColorOrScaleSize)
				return {
					...result,
					[key.substring(1)]: value,
				};

			const shouldScale =
				typeof value === 'number' &&
				key.match(
					/(opacity|shadowOpacity|zIndex|elevation|aspectRatio|shadowRadius|flex|flexGrow)/
				) == null;

			return {
				...result,
				[key]: shouldScale ? scale(value) : value,
			};
		},
		{}
	);
};

type InputNamedStyles<T> = {
	[K in keyof T]: InputStyle;
};

const objectMap = <T>(
	object: InputNamedStyles<T>,
	mapFn: (style: InputStyle) => InputStyle
) => {
	return Object.entries(object).reduce(
		(result: { [s: string]: InputStyle }, [key, value]) => {
			return {
				...result,
				[key]: mapFn(value as InputStyle),
			};
		},
		{}
	) as StyleSheet.NamedStyles<T>;
};

function transformedStyleSheet<T extends StyleSheet.NamedStyles<T>>(
	styleSheet: InputNamedStyles<T>
): StyleSheet.NamedStyles<T> {
	return StyleSheet.create(objectMap(styleSheet, objectColorMode));
}

export const useColor = () => {
	return { isLight: true, colors: GlobalColors };
};

type CreatorFunction<T> = ({
	colors,
	spacing,
	typo,
}: {
	colors: typeof GlobalColors;
	spacing: typeof GlobalSpacing;
	typo: typeof GlobalTypography;
}) => T;

export const makeStyles = <T extends InputNamedStyles<any>>(
	inputStylesOrCreatorFunction: T | CreatorFunction<T>
) => {
	if (typeof inputStylesOrCreatorFunction === 'function') {
		const defaultMode = transformedStyleSheet(
			inputStylesOrCreatorFunction({
				colors: GlobalColors,
				spacing: GlobalSpacing,
				typo: GlobalTypography,
			})
		);
		return () => {
			const { isLight, colors } = useColor();
			const styles = isLight ? defaultMode : defaultMode;
			return { styles, isLight, colors, spacing: GlobalSpacing };
		};
	}
	const styles = transformedStyleSheet(inputStylesOrCreatorFunction);
	return () => {
		const { isLight } = useColor();
		return { styles, isLight, colors: GlobalColors, spacing: GlobalSpacing };
	};
};
