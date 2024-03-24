import { api } from '@/services/api';
import { LoginParams, LoginResponse } from '@/types';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface AuthState {
	user: LoginResponse | null;
}

const initialState: AuthState = {
	user: null,
};

export const login = createAsyncThunk.withTypes<{
	state: { auth: AuthState };
}>()(
	'auth/login',
	async ({ email, password }: LoginParams, { rejectWithValue }) => {
		const response = await api.login(email, password);

		if (response.kind === 'ok') {
			return response.data;
		}

		return rejectWithValue(response.kind);
	}
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(login.pending, state => {
				state.user = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload;
			});
	},
});

export const authActions = {
	login,
};

export const authReducer = authSlice.reducer;
