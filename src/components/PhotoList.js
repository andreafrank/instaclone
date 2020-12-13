import React from 'react';

const PhotoList = (props) => {
	// const childList = {props.children}

	return (
		<div className="ui card">
			{props.children}
		</div>
	);
};


export default PhotoList;