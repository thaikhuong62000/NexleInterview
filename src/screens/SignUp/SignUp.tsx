import { View, ImageBackground } from 'react-native';
import React from 'react';
import { Icon, Screen, Text } from '@/components';
import { useStyles } from './styles';
import { SignUpForm } from './components/SignUpForm';

export function SignUp() {
	const { styles } = useStyles();

	return (
		<View style={styles.screen}>
			<View style={styles.background}>
				<ImageBackground
					source={require('@/assets/images/SignUpBackground.png')}
					resizeMode="cover"
					style={styles.backgroundImage}
				/>
			</View>
			<Screen
				backgroundColor="rgba(0,0,0,0)"
				preset="scroll"
				contentContainerStyle={styles.screenContentContainerStyle}
			>
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
		</View>
	);
}
