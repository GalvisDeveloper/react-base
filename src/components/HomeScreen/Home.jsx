import React, { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './../../assets/react.svg';
import { useApi } from '../../api/ApiProvider';

const Home = () => {
	const [count, setCount] = useState(0);
	const usersApi = useApi('users');

	const setCountWithLoader = () => {
		setCount((count) => count + 1);
		usersApi.get('users?page=1').then((response) => {
			console.log(response.data);
		});
	};
	return (
		<div>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button data-testid='counterPlus' onClick={setCountWithLoader}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
		</div>
	);
};

export default Home;
