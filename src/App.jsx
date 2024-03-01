// App.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
	const navigate = useNavigate();
	return (
		<>
			<h1>Is rendering</h1>

			<button onClick={() => navigate('home')}> Go to Home </button>

			<button onClick={() => navigate('profile')}> Go to Profile </button>
			<Outlet />
		</>
	);
}

export default App;
