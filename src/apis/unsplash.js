import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID iKjd0Jd6uAMnBppg0cd3B222i_Ssp9cA89_f4SX9fkE'
	}
});