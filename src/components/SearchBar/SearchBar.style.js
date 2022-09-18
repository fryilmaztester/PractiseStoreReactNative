import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  searchAreaInputContainer: {
    width: Dimensions.get('window').width / 5,
    borderRadius: 10,
    backgroundColor: 'eceff1',
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#eceff1',
  },
});
