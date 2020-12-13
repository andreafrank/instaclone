import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
	const [term, setTerm] = useState('');


// udemy 156
	// useEffect(() => {
	// 	const search = async () => {
	// 		await axios.get('dka');
	// 	};

	// 	search();
	// }, [term]);


	return (
		<div>
			<form className="ui form">
				<div className="field">
					<input 
						value={term}
						onChange={e => setTerm(e.target.value)} 
						type="text" 
						placeholder="Search"
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;