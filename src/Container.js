import React from 'react';

const Container = (props) => {
	return (
		<div className="ui card">
			<div className="content">{props.children}</div>
		</div>
	);
};

export default Container;