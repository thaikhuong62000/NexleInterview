import 'react-native-gesture-handler';

import React from 'react';
import {
	initialWindowMetrics,
	SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import ApplicationNavigator from './navigators/Application';
import { store } from './services/store';

function App(): React.JSX.Element {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<Provider store={store}>
				<ApplicationNavigator />
			</Provider>
		</SafeAreaProvider>
	);
}

export default App;
