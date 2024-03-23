import 'react-native-gesture-handler';

import React from 'react';
import {
	initialWindowMetrics,
	SafeAreaProvider,
} from 'react-native-safe-area-context';
import ApplicationNavigator from './navigators/Application';

function App(): React.JSX.Element {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<ApplicationNavigator />
		</SafeAreaProvider>
	);
}

export default App;
