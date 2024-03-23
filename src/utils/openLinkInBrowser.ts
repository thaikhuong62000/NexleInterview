import { Linking } from 'react-native';

/**
 * Helper for opening a give URL in an external browser.
 */
export async function openLinkInBrowser(url: string) {
	try {
		const canOpen = await Linking.canOpenURL(url);
		if (canOpen) {
			await Linking.openURL(url);
		}
	} catch (error) {
		// Handle error here
	}
	void Promise.resolve(); // Ignore the Promise
}
