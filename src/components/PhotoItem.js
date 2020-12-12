import React from 'react';

const PhotoList = (props) => {
		return (
			<div>
				<img alt="image" src={props.image} width={275}/>
				<div>{props.description}</div>
			</div>
		);
};

export default PhotoList;