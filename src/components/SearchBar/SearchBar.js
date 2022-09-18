import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <TextInput
          placeholder="Ara..."
          placeholderTextColor={'#BBBBBB'}
          style={styles.searchAreaInputContainer}
        />
      </View>
    </View>
  );
};

export default SearchBar;
