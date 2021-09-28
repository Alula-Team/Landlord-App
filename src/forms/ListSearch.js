import React from 'react';
import { View, TextInput } from 'react-native-elements';
// Vector Icons
import Feather from "react-native-vector-icons/Feather";

import styles from './styles';

const ListSearch = ({ placeholder = "Search...", value, onChangeText }) => {
  return (
    <View style={styles.searchContainer}>
      <Feather
        name="search"
        color="#34383D80"
        size={20}
        style={styles.searchIcon}
      />
      <TextInput
        type="search"
        placeholder="Search Properties"
        placeholderTextColor="#34383D80"
        autoFocus={false}
        autoCorrect={false}
        style={styles.searchInput}
        clearButtonMode="while-editing"
        onChangeText={handleSearch}
        value={value}
      />
    </View>
  )
}

export default ListSearch