import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from './Auth';
import { categoryReducer } from './Category';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		category: categoryReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
