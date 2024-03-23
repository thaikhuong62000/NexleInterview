import { TextInputProps } from 'react-native';

export type FormFieldProps = {
	// Progress bar props
	progressLabel?: string;
	progressPercent?: number;
	progressColor?: string;
} & TextInputProps;
