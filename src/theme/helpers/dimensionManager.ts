import { Dimensions, Platform, StatusBar } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
	Dimensions.get('window');

const isIphoneX = Platform.OS === 'ios' && SCREEN_HEIGHT >= 812;

export const statusBarHeight = Platform.select({
	ios: isIphoneX ? 44 : 20,
	android: StatusBar.currentHeight,
	default: 0,
});

export const BASE_WIDTH = 375;
export const BASE_HEIGHT = 812;

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

// const widthPercentageToDP = (widthPercent: number) => {
// 	return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
// };

// const heightPercentageToDP = (heightPercent: number) => {
// 	return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
// };

const scaleVertical = (size: number) => {
	return (SCREEN_HEIGHT / BASE_HEIGHT) * size;
};

const scaleHorizontal = (size: number) => {
	return (SCREEN_WIDTH / BASE_WIDTH) * size;
};

const isUseScaleVertical =
	BASE_WIDTH / BASE_HEIGHT > SCREEN_WIDTH / SCREEN_HEIGHT;

export const scale = (size: number) => {
	return isUseScaleVertical ? scaleVertical(size) : scaleHorizontal(size);
};
