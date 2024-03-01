import { afterEach, describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
// import App from '../App';

const App = () => {
	return (
		<>
			<h1>Vite + React</h1>
			<button data-testid='counter-plus' onClick={() => console.log('print')}>
				TestBtn
			</button>
		</>
	);
};

describe('App tests', () => {
	afterEach(cleanup);

	it('should render the app', () => {
		render(<App />);
	});

	it('should render the title', () => {
		render(<App />);
		screen.findByText('Vite + React');
	});

	it('should render a button', () => {
		render(<App />);
		const btn = screen.findByTestId('counter-plus');
	});
});
