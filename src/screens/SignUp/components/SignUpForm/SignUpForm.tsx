import { Alert, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { Checkbox, FormField, Icon, Text } from '@/components';
import { api } from '@/services/api';
import { navigate } from '@/utils/navigation';
import { useAppDispatch } from '@/hooks/useReduxStore';
import { authActions } from '@/services/store';
import { FormSchema } from './schema';
import { useStyles } from './styles';
import { usePasswordProgressBar } from './helpers/usePasswordProgressBar';
import { useFieldTouched } from './helpers/useFieldTouched';

export const SignUpForm = () => {
	const { styles, colors } = useStyles();
	const dispatch = useAppDispatch();

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

	const onSubmit = useCallback(async () => {
		if (errors != null) {
			return;
		}

		const signUpResult = await api.signUp(email, password);

		if (signUpResult.kind !== 'ok') {
			if (signUpResult.kind === 'forbidden') {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
				Alert.alert('Forbidden', signUpResult.data?.message);
			}
		}

		const loginResult = await dispatch(authActions.login({ email, password }));

		if (loginResult.meta.requestStatus === 'fulfilled') {
			navigate('Categories');
		}
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
				onBlur={emailTouched.onTouched}
			/>
			<FormField
				placeholder="Your password"
				secureTextEntry
				value={password}
				onChangeText={setPassword}
				progressLabel={passwordProgressBar.label}
				progressColor={passwordProgressBar.color}
				progressPercent={passwordProgressBar.progress}
				onFocus={passwordTouched.onTouched}
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
					Privacy Policy{' '}
				</Text>
				onBlur
			</Text>
			<View style={styles.submitRow}>
				<Text preset="formValue">Sign Up</Text>
				<TouchableOpacity
					style={styles.submitBtn}
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onPress={onSubmit}
					disabled={isSubmitDisabled}
				>
					<Icon icon="arrow" />
				</TouchableOpacity>
			</View>
		</View>
	);
};
