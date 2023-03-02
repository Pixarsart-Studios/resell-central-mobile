import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Button = ({
    onPress,
    title,
    style,
    textStyle,
  }) => {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
    </View>
  )
}

export default Button
