import React from 'react';
import {Button, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';
import { bgWhite, buttonColor } from '@/Constants/Colors';

const AppFormSubmitButton = ({title}) => {
const {handleSubmit, isValid} = useFormikContext();

return(
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    </View>
)
};

export default AppFormSubmitButton;

const styles= StyleSheet.create({
    buttonContainer: {
     paddingLeft: 24,
    //  paddingTop: 24,
  paddingTop: 10,

    },
     button: {
     width: '93%',
     height: 51,
     borderRadius: 5,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: buttonColor
 
   },
   title: {
     color: bgWhite,
     fontWeight: '600',
     fontSize: 16,
     lineHeight: 19.49
   }
 })
 