import React from 'react';

const Post = (props) => {
	return (
		<div className="ui card">
			<div className="content">{props.children}</div>
		</div>
	);
};

export default Post;