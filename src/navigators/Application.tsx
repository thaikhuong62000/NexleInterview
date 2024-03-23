import type { ApplicationStackParamList } from '@/types';

import { createStackNavigator } from '@react-navigation/stack';
import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import { Auth } from '@/screens';
import { navigationRef } from '@/utils/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

const screenOptions = {
	headerShown: false,
};

function ApplicationNavigator() {
	const colorScheme = useColorScheme();

	return (
		<NavigationContainer
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
			ref={navigationRef}
		>
			<Stack.Navigator
				key={colorScheme}
				initialRouteName="Auth"
				screenOptions={screenOptions}
			>
				<Stack.Screen name="Auth" component={Auth} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
