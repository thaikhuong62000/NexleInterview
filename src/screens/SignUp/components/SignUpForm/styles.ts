import { makeStyles } from '@/theme';

export const useStyles = makeStyles(({ colors }) => ({
	policy: {
		paddingTop: 29,
	},
	policyHighlight: {
		color: colors.palette.primary100,
	},
	submitRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 30,
	},
	submitBtn: {
		width: 54,
		height: 54,
		borderRadius: 27,
		borderWidth: 1,
		borderColor: colors.palette.primary100,
		justifyContent: 'center',
		alignItems: 'center',
	},
}));
