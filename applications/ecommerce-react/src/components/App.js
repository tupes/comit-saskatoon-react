import React from 'react'

import Header from './Header';
import ItemCategories from './ItemCategories';
import ItemsList from './ItemsList';
import Footer from './Footer';

import { getItems } from '../data';

export default function App() {
	const sportItems = getItems();
	const isLoggedIn = true;

	return (
			<div className="container">
				<Header isLoggedIn={isLoggedIn} pageTitle={"Sports Store!"} />
				<ItemCategories />
				<ItemsList items={sportItems} buttonText={"Add to Cart!"} exampleText={'Hi Surpreet'} />
				<Footer />
			</div>
	);
}
