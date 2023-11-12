import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Search by name or role..."
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        value={searchQuery}
        onChangeText={(event) => handleSearch(event)}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  textInput: {
    backgroundColor: "#fff",
    width: "90%",
    color: "#48B7A7",
    borderRadius: 8,
    padding: 8,
    marginHorizontal: Platform.OS === "android" ? 30 : null,
    marginBottom: Platform.OS === "android" ? 5 : 10,
    textAlign: "left",
  },
});
