import { makeStyles, statusBarHeight } from '@/theme';

export const useStyles = makeStyles(() => ({
	background: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	backgroundImage: {
		width: 375,
		height: 812,
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		paddingTop: 12,
		marginBottom: 54,
		marginTop: statusBarHeight,
	},
	formContainer: {},
	header: {
		paddingBottom: 41,
	},
}));
