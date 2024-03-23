import { NavigationContainer } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Auth: undefined;
	SignUp: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavigationProps
	extends Partial<React.ComponentProps<typeof NavigationContainer>> {}
