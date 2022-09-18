import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  Dimension,
  ScrollView,
  StyleSheet,
} from 'react-native';

import product_data from './product_data.json';
import SearchBar from './components/SearchBar/SearchBar';
import Product from './components/Product/Product';

const App = () => {
  const renderProducts = ({item}) => <Product product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> CLARUSWAY STORE </Text>
      <FlatList
        numColumns={2}
        ListHeaderComponent={SearchBar}
        keyExtractor={item => item.id.toString()}
        data={product_data}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: 'purple',
  },
});

export default App;
