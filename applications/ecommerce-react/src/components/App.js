import React, { useState } from 'react'

import Header from './Header';
import ItemCategories from './ItemCategories';
import ItemsList from './ItemsList';
import Footer from './Footer';

import { getItems } from '../data';

export default function App() {

	const sportItems = getItems();

	return (
		<div className="container">
			<Header pageTitle={"Sports Store!"} />
			<ItemCategories />
			<ItemsList items={sportItems} buttonText={"Add to Cart!"} />
			<Footer />
		</div>
	);
}
