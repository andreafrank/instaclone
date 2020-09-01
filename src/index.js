import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import Container from './Container';
import Photo from './Photo';
import faker from 'faker';
// import styles from './styles.css'

const App = () => {
	return (
		<div className="ui container comments">
			<Container>
				<User 
					author="hey"
					timeAgo="what"
					avatar={faker.image.avatar()}
				/>

				<Photo
					photo_image={faker.image.image()}
					photo_text={faker.lorem.sentence()} 
				/>
			</Container>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));