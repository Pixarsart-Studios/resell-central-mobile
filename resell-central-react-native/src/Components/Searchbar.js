import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
// import { Feather, Entypo } from "@expo/vector-icons";
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={
        //   clicked
            // ? 
            // styles.searchBar__clicked
            // : 
            styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <EvilIcons
          name="search"
          size={30}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
        //   value={searchPhrase}
        //   onChangeText={setSearchPhrase}
        //   onFocus={() => {
        //     setClicked(true);
        //   }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )} */}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    // margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    paddingLeft: 24, 
    paddingTop: 15
    
  },
  searchBar__unclicked: {
    // padding: 10,
    flexDirection: "row",
    width: "85%",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    height: 45
  },
  searchBar__clicked: {
    // padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 45
  },
  input: {
    fontSize: 14,
    // marginLeft: 10,
    width: "90%",
    
  },
});