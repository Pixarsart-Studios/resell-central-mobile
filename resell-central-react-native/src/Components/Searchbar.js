import { strokeGray } from "@/Constants/Colors";
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, Image } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar__unclicked}>
        <Image style={{height: 30, width: 30, position: 'absolute', top: 6, left: 12 }} 
        source={require('../Assets/Images/searchIcon.png')} />
        <TextInput style={styles.input}
          placeholder="Search"
          />
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    paddingLeft: 24, 
    paddingTop: 15
    
  },
  searchBar__unclicked: {
    flexDirection: "row",
  },
  input: {
    fontSize: 14,
    width: "95%",
    borderWidth: 1,
    height: 45,
    borderColor: strokeGray,
    borderRadius: 5,
    paddingLeft: '17%'
    
  },
});