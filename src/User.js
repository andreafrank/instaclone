import React from 'react';

const User = (props) => {
	return (
		<div classname="avatar">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.avatar} />
			</a>
			<div>
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.timeAgo}</span>
				</div>
				<div className="text">{props.givenComment}</div>
			</div>
		</div>
	);
};

export default User;