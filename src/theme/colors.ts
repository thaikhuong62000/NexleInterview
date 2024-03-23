const palette = {
	neutral100: '#FFFFFF',
	neutral200: '#f4f4f4',
	neutral300: '#d6d6d6',
	neutral400: '#b6b6b6',
	neutral500: '#979797',
	neutral600: '#565656',
	neutral700: '#3c3c3c',
	neutral800: '#191919',
	neutral900: '#000000',

	primary100: '#dff1e2',
	primary200: '#b6dfbc',
	primary300: '#8ecd96',
	primary400: '#72c17d',
	primary500: '#57b564',
	primary600: '#469f52',

	secondary100: '#ffe5c4',
	secondary200: '#ffd49d',
	secondary300: '#ffc376',
	secondary400: '#ffb24e',
	secondary500: '#ffa127',
	secondary600: '#FF9000',

	accent100: '#91bdfb',
	accent200: '#589afa',
	accent300: '#1f78f8',
	accent400: '#075bd5',
	accent500: '#05439c',

	angry100: '#F2D6CD',
	angry500: '#C03403',

	overlay20: 'rgba(25, 16, 21, 0.2)',
	overlay50: 'rgba(25, 16, 21, 0.5)',
} as const;

export const GlobalColors = {
	/**
	 * The palette is available to use, but prefer using the name.
	 * This is only included for rare, one-off cases. Try to use
	 * semantic names as much as possible.
	 */
	palette,
	/**
	 * A helper for making something see-thru.
	 */
	transparent: 'rgba(0, 0, 0, 0)',
	/**
	 * The default text color in many components.
	 */
	text: palette.neutral800,
	/**
	 * Secondary text information.
	 */
	textDim: palette.neutral600,
	/**
	 * The default color of the screen background.
	 */
	background: palette.neutral200,
	/**
	 * The default border color.
	 */
	border: palette.neutral400,
	/**
	 * The default color of card-like backgrounds.
	 */
	card: palette.neutral100,
	/**
	 * The main tinting color.
	 */
	tint: palette.accent500,
	/**
	 * A subtle color used for lines.
	 */
	separator: palette.neutral300,
	/**
	 * Error messages.
	 */
	error: palette.angry500,
	/**
	 * Error Background.
	 */
	errorBackground: palette.angry100,
};
