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
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		paddingTop: 12,
		marginBottom: 122,
		marginTop: statusBarHeight,
	},
	container: {
		flex: 1,
		paddingHorizontal: 16,
	},
	subHeading: {
		marginTop: 11,
		marginBottom: 20,
		marginRight: 48,
	},
}));
