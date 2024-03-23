import { View, ImageBackground } from 'react-native';
import React from 'react';
import { Icon, Screen, Text } from '@/components';
import { useStyles } from './styles';
import { SignUpForm } from './components/SignUpForm';

export function SignUp() {
	const { styles } = useStyles();

	return (
		<Screen backgroundColor="#000">
			<View style={styles.background}>
				<ImageBackground
					source={require('@/assets/images/SignUpBackground.png')}
					resizeMode="cover"
					style={styles.backgroundImage}
				/>
			</View>
			<View style={styles.container}>
				<Icon icon="backArrow" />
				<View style={styles.formContainer}>
					<Text preset="heading" style={styles.header}>
						Let’s get you started!
					</Text>
					<SignUpForm />
				</View>
			</View>
		</Screen>
	);
}
