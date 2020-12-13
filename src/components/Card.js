import React from 'react';
import User from './User';
import PhotoItem from './PhotoItem';
import faker from 'faker';

const Card = () =>{

	const hashTags = [];
	for (var i = 0; i < 3; i++) {
		hashTags.push(`#${faker.lorem.word()} `);
	};
// -------------------------------

	return (
		<div>
			<User 
				name={faker.internet.userName()}
				avatar={faker.image.abstract()} 
			/>
			<PhotoItem 
				description={hashTags}
				image={faker.image.image()}
			/>
		</div>
	);
}

export default Card;