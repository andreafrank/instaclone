import React from 'react';

const User = (props) => {
	return (
		<div>				
			<img className="ui avatar image" alt="avatar" src={props.avatar} />
			{props.name}
		</div>
	);
};

export default User;