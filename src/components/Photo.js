import React from 'react';

const Photo = (props) => {
	return (
		<div className="content">
			<div className="ui medium rounded image">
				<img alt="photo_image" src={props.photo_image} />
			</div>

			<div className="text">
				{props.photo_text}
			</div>
		</div>
	);
};

export default Photo;
