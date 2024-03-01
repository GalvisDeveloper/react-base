// ApiContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

const ApiContext = createContext();

export const ApiProvider = ({ children, apis }) => {
	const [loading, setLoading] = useState(false);
	const axiosInstances = {};

	// Crear instancias de Axios para cada API
	for (const api of apis) {
		axiosInstances[api.name] = axios.create({
			baseURL: api.baseURL,
		});

		// Interceptor de solicitud global
		axiosInstances[api.name].interceptors.request.use(
			(config) => {
				setLoading(true);
				return config;
			},
			(error) => {
				setLoading(false);
				return Promise.reject(error);
			},
		);

		// Interceptor de respuesta global
		axiosInstances[api.name].interceptors.response.use(
			(response) => {
				setLoading(false);
				return response;
			},
			(error) => {
				setLoading(false);
				return Promise.reject(error);
			},
		);
	}

	return (
		<ApiContext.Provider value={{ apis: axiosInstances }}>
			{loading && <LoadingSpinner />}
			{children}
		</ApiContext.Provider>
	);
};

export const useApi = (serviceName) => {
	const { apis } = useContext(ApiContext);

	if (!serviceName || !apis[serviceName]) {
		throw new Error(`Service '${serviceName}' not found.`);
	}

	return apis[serviceName];
};
