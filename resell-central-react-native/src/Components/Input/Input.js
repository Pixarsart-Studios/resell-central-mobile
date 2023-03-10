import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({
  style,
  props,
  children,
  multiLine,
  value,
  placeholder,
  onChangeText,
  
  }) => {
  console.log(props, 'props', placeholder);
  return (

    <View style={styles.container}>
        <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        style={style}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
})

export default Input
