/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://docs.infinite.red/ignite-cli/boilerplate/app/services/Services.md)
 * documentation for more details.
 */
import { Categories, Category, LoginResponse, SignUpResponse } from '@/types';

import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import Config from '../../config';
import { GeneralApiProblem, getGeneralApiProblem } from './apiProblem';
import type { ApiConfig } from './api.types';
import { store } from '../store';

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
	url: Config.API_URL,
	timeout: 10000,
};

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
	apisauce: ApisauceInstance;

	config: ApiConfig;

	/**
	 * Set up our API instance. Keep this lightweight!
	 */
	constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
		this.config = config;
		this.apisauce = create({
			baseURL: this.config.url,
			timeout: this.config.timeout,
			headers: {
				Accept: 'application/json',
			},
		});
	}

	async signUp(
		email: string,
		password: string
	): Promise<{ kind: 'ok'; data: SignUpResponse } | GeneralApiProblem> {
		const response: ApiResponse<SignUpResponse> = await this.apisauce.post(
			'auth/signup',
			{
				email,
				password,
				firstName: 'John',
				lastName: 'Doe',
			}
		);

		if (!response.ok) {
			const problem = getGeneralApiProblem(response);
			if (problem) return problem;
		}

		const parsedData = SignUpResponse.safeParse(response.data);

		if (parsedData.success) {
			return { kind: 'ok', data: parsedData.data };
		}

		return { kind: 'bad-data' };
	}

	async login(
		email: string,
		password: string
	): Promise<{ kind: 'ok'; data: LoginResponse } | GeneralApiProblem> {
		const response: ApiResponse<LoginResponse> = await this.apisauce.post(
			'auth/signin',
			{
				email,
				password,
			}
		);

		if (!response.ok) {
			const problem = getGeneralApiProblem(response);
			if (problem) return problem;
		}

		const parsedData = LoginResponse.safeParse(response.data);

		if (parsedData.success) {
			return { kind: 'ok', data: parsedData.data };
		}

		return { kind: 'bad-data' };
	}

	async getCategories(): Promise<
		{ kind: 'ok'; data: Category[] } | GeneralApiProblem
	> {
		const jwt = store.getState().auth.user?.accessToken;
		if (!jwt) return { kind: 'unauthorized' };

		const response: ApiResponse<Category[]> = await this.apisauce.get(
			'categories',
			undefined,
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			}
		);

		if (!response.ok) {
			const problem = getGeneralApiProblem(response);
			if (problem) return problem;
		}

		const parsedData = Categories.safeParse(response.data);

		if (parsedData.success) {
			return { kind: 'ok', data: parsedData.data };
		}

		return { kind: 'bad-data' };
	}
}

// Singleton instance of the API for convenience
export const api = new Api();
