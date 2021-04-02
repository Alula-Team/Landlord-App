import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" color="#fff" size={20} style={styles.searchIcon} />
      <TextInput
        type="search"
        placeholder="Search Properties"
        placeholderTextColor="#ffffff75"
        style={styles.searchInput}
        keyboardAppearance="dark"
        // onChangeText={(text) => searchFilterFunction(text)}
        // value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Searchbar
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderColor: "#ffffff50",
    borderRadius: 10,
    borderWidth: 1,
    height: 45,
    flexDirection: "row",
  },
  searchIcon: {
    alignSelf: "center",
    marginLeft: 10,
  },
  searchInput: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 12.5,
  },
});

export default SearchBar;
