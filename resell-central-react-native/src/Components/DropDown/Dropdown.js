import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import SelectDropdown from "react-native-select-dropdown";

const Button = ({ array }) => {
  return (
    <SelectDropdown
      defaultButtonText="Category"
      buttonStyle={styles.btn}
      data={array}
      buttonTextStyle={{ textAlign: "left" }}
      onSelect={(selectedItem, index) => {
        console.log("onSelect", selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        console.log("buttonTextAfterSelection", selectedItem);
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        console.log("rowTextForSelection", item);
        return item;
      }}
      dropdownStyle={styles.dropdown}
      renderDropdownIcon={(focused) => {
        return (
          <Image
            style={styles.arrow}
            source={require("../../Assets/Images/angleDown.png")}
            resizeMode="contain"
          />
        );
      }}
    />
  );
};

export default Button;
