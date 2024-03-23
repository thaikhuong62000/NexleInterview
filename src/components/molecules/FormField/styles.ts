import { makeStyles } from '@/theme';

export const useStyles = makeStyles(({ typo }) => ({
	textInput: {
		paddingBottom: 4,
		paddingTop: 7,
		paddingHorizontal: 0,
		...typo.primary.normal,
		fontSize: 16,
		lineHeight: 19.2,
	},
	eyeIcon: {
		position: 'absolute',
		right: 0,
		bottom: 36,
	},
}));
