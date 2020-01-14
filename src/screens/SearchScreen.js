import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMesage] = useState('');
    
    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'warsaw'
                }
            });
            setResults(response.data.businesses);
     } catch (e) {
        setErrorMesage('Coś się zepsuło!');
     }
    };

    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Znaleziono {results.length} wyników</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen