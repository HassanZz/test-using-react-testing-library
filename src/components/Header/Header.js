import React from 'react';
import './Header.css';

export default function Header({ title }) {
	return (
		<>
			<h1 className='header'>{title}</h1>
			{/* <h3 className='header'>Cats</h3> this line commented when we want to test assertion */}
		</>
	);
}
