import { useColor } from '@/theme';

type ProgressBarParams = {
	password: string;
	errors: Record<string, string> | null;
	isTouched: boolean;
};

type ProgressBarConfig = {
	label: string;
	color?: string;
	progress: number;
};

export const usePasswordProgressBar = ({
	password,
	errors,
	isTouched,
}: ProgressBarParams): ProgressBarConfig => {
	const { colors } = useColor();
	const passwordLength = password.length;
	if (!isTouched) {
		return {
			label: '',
			progress: 100,
		};
	}
	if (passwordLength === 0) {
		return {
			label: errors?.password || '',
			color: errors?.password ? colors.error : undefined,
			progress: 100,
		};
	}
	if (passwordLength < 6) {
		return {
			label: 'Too short',
			color: colors.palette.neutral100P50,
			progress: 0,
		};
	}
	if (passwordLength > 18) {
		return {
			label: errors?.password || '',
			color: colors.error,
			progress: 100,
		};
	}
	const haveUpperAndLowerCase = Number(
		/[a-z]/.test(password) && /[A-Z]/.test(password)
	);
	const haveNumber = Number(/[0-9]/.test(password));
	const haveSpecialChar = Number(
		/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password)
	);
	switch (haveUpperAndLowerCase + haveNumber + haveSpecialChar) {
		case 1:
			return {
				label: 'Weak',
				color: colors.palette.passwordStrength.weak,
				progress: 33,
			};
		case 2:
			return {
				label: 'Fair',
				color: colors.palette.passwordStrength.fair,
				progress: 66,
			};
		case 3:
			return {
				label: 'Strong',
				color: colors.palette.passwordStrength.strong,
				progress: 100,
			};
		default:
	}
	return {
		label: errors?.password || '',
		color: errors?.password ? colors.error : undefined,
		progress: 100,
	};
};
