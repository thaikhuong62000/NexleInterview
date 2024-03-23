import { TouchableOpacity, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { Checkbox, FormField, Icon, Text } from '@/components';
import { navigate } from '@/utils/navigation';
import { FormSchema } from './schema';
import { useStyles } from './styles';
import { usePasswordProgressBar } from './helpers/usePasswordProgressBar';
import { useFieldTouched } from './helpers/useFieldTouched';

export const SignUpForm = () => {
	const { styles, colors } = useStyles();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [ageChecked, setAgeChecked] = useState(false);

	const emailTouched = useFieldTouched();
	const passwordTouched = useFieldTouched();

	const onAgeChecked = useCallback(() => {
		setAgeChecked(pre => !pre);
	}, []);

	const errors = useMemo(() => {
		const parseResult = FormSchema.safeParse({ email, password });
		if (!parseResult.success) {
			return parseResult.error.errors.reduce(
				(acc, error) => ({
					...acc,
					[error.path[0]]: error.message,
				}),
				{} as Record<string, string>
			);
		}
		return null;
	}, [email, password]);

	const onSubmit = useCallback(() => {
		if (errors != null) {
			return;
		}
		navigate('Categories');
	}, [errors]);

	const passwordProgressBar = usePasswordProgressBar({
		password,
		errors,
		isTouched: passwordTouched.isTouched,
	});

	const isSubmitDisabled =
		errors != null || email === '' || password === '' || !ageChecked;

	return (
		<View>
			<FormField
				placeholder="Your email"
				value={email}
				onChangeText={setEmail}
				progressLabel={emailTouched.isTouched ? errors?.email : undefined}
				progressColor={
					emailTouched.isTouched && errors?.email ? colors.error : undefined
				}
				onBlur={emailTouched.onBlur}
			/>
			<FormField
				placeholder="Your password"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
				progressLabel={passwordProgressBar.label}
				progressColor={passwordProgressBar.color}
				progressPercent={passwordProgressBar.progress}
				onBlur={passwordTouched.onBlur}
			/>
			<Checkbox
				content="I am over 16 years of age"
				checked={ageChecked}
				onPress={onAgeChecked}
			/>
			<Text preset="formHelper" style={styles.policy}>
				By clicking Sign Up, you are indicating that you have read and agree to
				the
				<Text preset="formHelper" style={styles.policyHighlight}>
					{' '}
					Terms of Service{' '}
				</Text>
				and
				<Text preset="formHelper" style={styles.policyHighlight}>
					{' '}
					Privacy Policy
				</Text>
				onBlur
			</Text>
			<View style={styles.submitRow}>
				<Text preset="formValue">Sign Up</Text>
				<TouchableOpacity
					style={styles.submitBtn}
					onPress={onSubmit}
					disabled={isSubmitDisabled}
				>
					<Icon icon="arrow" />
				</TouchableOpacity>
			</View>
		</View>
	);
};
