import {
	Animated,
	Easing,
	TextInputFocusEventData,
	NativeSyntheticEvent,
} from 'react-native';
import { useCallback, useMemo, useRef } from 'react';
import { scale } from '@/theme';
import { FormFieldProps } from '../type';

const DEFAULT_Y_OFFSET = scale(28);

export const useLabelAnimation = (props: Partial<FormFieldProps>) => {
	const yOffset = useRef(
		new Animated.Value(props.value?.length === 0 ? DEFAULT_Y_OFFSET : 0)
	).current;

	const onFocus = useCallback(
		(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
			Animated.timing(yOffset, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
				easing: Easing.cubic,
			}).start();
			props.onFocus?.(e);
		},
		[props.onFocus]
	);

	const onBlur = useCallback(
		(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
			if (props.value?.length === 0) {
				Animated.timing(yOffset, {
					toValue: DEFAULT_Y_OFFSET,
					duration: 300,
					useNativeDriver: true,
					easing: Easing.cubic,
				}).start();
			}
			props.onBlur?.(e);
		},
		[props.onBlur, props.value?.length]
	);

	const animatedLabelStyles = useMemo(
		() => ({
			transform: [{ translateY: yOffset }],
		}),
		[]
	);

	return { onFocus, onBlur, animatedLabelStyles };
};
