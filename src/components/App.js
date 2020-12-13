import React from 'react';
import PhotoList from './PhotoList';
import Card from './Card';
import SearchBar from './SearchBar';

const App = () => {
	const displayMultipleCards = [];
	for (var i = 0; i < 25; i++) {
		displayMultipleCards.push(
			<Card />, <br />
		)
	}

	return (
		<div>
			<SearchBar />
			<PhotoList>
				{displayMultipleCards}
			</PhotoList>
		</div>
	)
};

export default App;