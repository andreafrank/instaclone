import React from 'react';

const PhotoList = (props) => {
	return (
		<div className="ui card">
			{props.children}
		</div>
	);
};


export default PhotoList;