import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = ({
  style,
  props,
  children,
  multiLine,
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  autoCapitalize
}) => {
  // console.log(props, 'props', placeholder);
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[style, {paddingLeft: 18}]}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default Input;
