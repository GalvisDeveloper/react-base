import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ApiProvider } from './api/ApiProvider.jsx';
import { apis } from './api/list.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ApiProvider apis={apis}>
			<RouterProvider router={router} />
		</ApiProvider>
	</React.StrictMode>,
);
