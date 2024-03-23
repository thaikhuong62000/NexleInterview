import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type InputStyle =
	| ViewStyle
	| TextStyle
	| ImageStyle
	| {
			_backgroundColor?: string;
			_color?: string;
			_borderColor?: string;
			_borderTopColor?: string;
			_borderBottomColor?: string;
			_borderLeftColor?: string;
			_borderRightColor?: string;
			_shadowColor?: string;
	  };
