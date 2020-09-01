import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import faker from 'faker';
import styles from './styles.css'

const App = () => {
	return (
		<div>
			<User 
				author="hey"
				timeAgo="what"
				avatar={faker.image.avatar()}
			/>
		</div>
	);
};
ReactDOM.render(<App />, document.querySelector('#root'));