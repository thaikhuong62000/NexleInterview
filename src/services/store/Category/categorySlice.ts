import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
	saved: Record<string, boolean>;
}

const initialState: CategoryState = {
	saved: {},
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		savedCategory(state, action: PayloadAction<CategoryState['saved']>) {
			state.saved = action.payload;
		},
	},
});

export const categoryActions = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
