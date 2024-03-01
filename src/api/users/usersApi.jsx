import axios from 'axios';

export const usersApi = axios.create({
	baseURL: 'https://reqres.in/api',
});
