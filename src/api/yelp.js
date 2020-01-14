import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer v6w49DTXSOVvgEEK40VQc1vQ03C3ikICdCpGcy-bEiKwr_K0V-3jJuaTJI0hwAJFATLzu5yUfp6C7qKXx_3OH7XOPKHqQna3P7LfibpZJA7G-a286dEpelDAR_wdXnYx'
    }
});

