import { TextStyle } from 'react-native';

const fonts = {
	roboto: {
		light: {
			fontFamily: 'Roboto',
			fontWeight: '300',
		},
		normal: {
			fontFamily: 'Roboto',
			fontWeight: '400',
		},
		medium: {
			fontFamily: 'Roboto',
			fontWeight: '500',
		},
		semiBold: {
			fontFamily: 'Roboto',
			fontWeight: '600',
		},
		bold: {
			fontFamily: 'Roboto',
			fontWeight: '700',
		},
	},
} satisfies {
	[font: string]: {
		[weight: string]: TextStyle;
	};
};

export const GlobalTypography = {
	/**
	 * The fonts are available to use, but prefer using the semantic name.
	 */
	fonts,
	/**
	 * The primary font. Used in most places.
	 */
	primary: fonts.roboto,
};
