import { useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMesage] = useState('');
    
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'warsaw'
                }
            });
            setResults(response.data.businesses);
     } catch (e) {
        setErrorMesage('Coś się zepsuło!');
     }
    };
    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [searchApi, results, errorMessage]
};