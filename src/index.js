import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import Post from './Post';
import faker from 'faker';
import styles from './styles.css'

const App = () => {
	return (
		<div className="ui container comments">
			<Post>
				<User 
					author="hey"
					timeAgo="what"
					avatar={faker.image.avatar()}
				/>
			</Post>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));