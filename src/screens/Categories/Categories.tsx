import { type ApplicationScreenProps } from '@/types';

import { ImageBackground, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CategoriesList, Icon, Screen, Text } from '@/components';
import { useStyles } from './styles';

const BACK_HIT_SLOP = { top: 10, right: 10, bottom: 10, left: 10 };

export function Categories({ navigation }: ApplicationScreenProps) {
	const { styles } = useStyles();

	return (
		<Screen backgroundColor="#000">
			<View style={styles.background}>
				<ImageBackground
					source={require('@/assets/images/CategoriesBackground.png')}
					resizeMode="cover"
					style={styles.backgroundImage}
				/>
			</View>
			<View style={styles.headerContainer}>
				<Icon
					icon="backArrow"
					onPress={navigation.goBack}
					hitSlop={BACK_HIT_SLOP}
				/>
				<TouchableOpacity>
					<Text>Done</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.container}>
				<Text preset="heading">Wellcome to Nexle Entrance Test</Text>
				<Text style={styles.subHeading}>
					Please select categories what you would like to see on your feed. You
					can set this later on Filter.
				</Text>
				<CategoriesList />
			</View>
		</Screen>
	);
}
