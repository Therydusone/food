import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();       
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Znaleziono {results.length} wyników</Text>
            <ResultsList results={filterResultsByPrice('$')} title="Tanio"/>
            <ResultsList results={filterResultsByPrice('$$')} title="Średnia półka"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Drogo"/>
            </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen