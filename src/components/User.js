import React from 'react';

const User = (props) => {
	return (
		<div>
			<a href="/" className="ui circular image">
				<img alt="avatar" src={props.avatar} />
			</a>
			<div>
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.timeAgo}</span>
				</div>
				<div className="text">{props.selfDescription}</div>
			</div>
		</div>
	);
};

export default User;