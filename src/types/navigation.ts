import { NavigationContainer } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Auth: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;

export interface NavigationProps
	extends Partial<React.ComponentProps<typeof NavigationContainer>> {}
