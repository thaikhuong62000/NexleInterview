import { TextInput, Animated, View } from 'react-native';
import React, { useState } from 'react';
import { Icon, Text } from '../../atoms';
import { ProgressBar } from './ProgressBar';
import { useStyles } from './styles';
import { useLabelAnimation } from './helpers/useLabelAnimation';
import { FormFieldProps } from './type';

const EYE_HIT_SLOP = { top: 10, right: 10, bottom: 10, left: 10 };

export const FormField = ({
	placeholder,
	secureTextEntry,
	...props
}: FormFieldProps) => {
	const { styles } = useStyles();
	const { onFocus, onBlur, animatedLabelStyles } = useLabelAnimation(props);

	const [showContent, setShowContent] = useState(!secureTextEntry);
	const toggleShowContent = () => setShowContent(prev => !prev);

	return (
		<View>
			<Animated.View style={animatedLabelStyles}>
				<Text preset="formLabel">{placeholder}</Text>
			</Animated.View>
			<TextInput
				{...props}
				style={styles.textInput}
				onFocus={onFocus}
				onBlur={onBlur}
				secureTextEntry={secureTextEntry && !showContent}
			/>
			<ProgressBar
				label={props.progressLabel}
				progress={props.progressPercent}
				color={props.progressColor}
			/>
			{secureTextEntry && !showContent && (
				<Icon
					icon="eye"
					containerStyle={styles.eyeIcon}
					onPress={toggleShowContent}
					hitSlop={EYE_HIT_SLOP}
				/>
			)}
			{secureTextEntry && showContent && (
				<Icon
					icon="eyeClosed"
					containerStyle={styles.eyeIcon}
					onPress={toggleShowContent}
					hitSlop={EYE_HIT_SLOP}
				/>
			)}
		</View>
	);
};
