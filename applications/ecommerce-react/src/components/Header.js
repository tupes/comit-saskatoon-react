import React from 'react'

export default function Header(props) {
	return (
		<header className="page-header">
			<h1>{props.pageTitle}</h1>
			<button><a href="pages/signup.html">{props.isLoggedIn ? 'Log out' : 'Log in'}</a></button>
		</header>
	);
}
