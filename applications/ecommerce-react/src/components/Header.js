import React from 'react'

export default function Header(props) {
	return (
		<header className="page-header">
			<h1>Sports Store</h1>
			<div>
				<button onClick={props.handleClick}>{props.isLoggedIn ? 'Log out' : 'Log in'}</button>
				<span>{props.count}</span>
			</div>
		</header>
	);
}
