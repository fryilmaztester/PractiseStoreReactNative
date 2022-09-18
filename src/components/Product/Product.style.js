import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 10,
  },

  innerContainer: {
    padding: 5,
  },

  image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 12,
  },

  title: {
    fontSize: 10,
    fontWeight: '700',
  },

  inStock: {
    color: 'red',
    marginTop: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 17,
  },

  price: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 5,
  },
});
