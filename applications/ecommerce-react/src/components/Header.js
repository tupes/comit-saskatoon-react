import React, { useState } from 'react'

export default function Header(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [count, setCount] = useState(0);

	const handleOnClick = () => {
		const newCount = count + 1;
		setCount(newCount);
		console.log(`The current click count is ${newCount}`);

		setIsLoggedIn(!isLoggedIn); // just a quicker way of doing the logic below  
		// if (isLoggedIn) {
		// 	console.log('Setting isLoggedIn to false');
		// 	setIsLoggedIn(false);
		// } else {
		// 	console.log('Setting isLoggedIn to true');
		// 	setIsLoggedIn(true);
		// }
	}

	return (
		<header className="page-header">
			<h1>{props.pageTitle}</h1>
			<div>
				<button onClick={handleOnClick}>{isLoggedIn ? 'Log out' : 'Log in'}</button>
				<span>{count}</span>
			</div>
		</header>
	);
}
