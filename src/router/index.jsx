import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Profile from '../components/Profile/Profile';
import Home from '../components/HomeScreen/Home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: 'home', element: <Home /> },
			{ path: 'profile', element: <Profile /> },
			// { path: 'profile/:id', element: <ProfileView /> },
			{ path: '*', element: <Navigate to='home' /> },
		],
	},
	{
		path: '/',
		element: <Navigate to='Home' />,
	},
	{
		path: '*',
		element: <h1>Not found</h1>,
	},
]);
