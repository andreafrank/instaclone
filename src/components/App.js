import React from 'react';
import PhotoItem from './PhotoItem';
import PhotoList from './PhotoList';
import User from './User';
import SearchBar from './SearchBar';
import faker from 'faker';

const App = () => {
	return (
		<div>
			<SearchBar />
			<PhotoList>
				<User 
					name="newt"
					avatar={faker.image.abstract()} 
				/>
				<PhotoItem 
					description="stuff" 
					image={faker.image.image()}
				/>
			</PhotoList>
		</div>
	)
};

export default App;