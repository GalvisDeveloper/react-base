import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';

const GlobalLoader = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Spinner = styled(FaSpinner)`
	font-size: 3rem;
	color: white;
`;
const LoadingSpinner = () => {
	return (
		<GlobalLoader>
			<Spinner width={500} />
		</GlobalLoader>
	);
};

export default LoadingSpinner;
