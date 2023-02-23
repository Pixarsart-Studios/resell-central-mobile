import { View, Text, TextInput, StyleSheet, Image, StatusBar } from 'react-native'
import React, {useState} from 'react'
import Input from '@/Components/Input/Input'
import Button from '@/Components/Button/Button'
import { styles } from './styles'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
  
const CELL_COUNT = 4;

const EnterOtpScreen = ({navigation}) => {
    const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.container}>
    <StatusBar 
    backgroundColor={'#FFFFFF'}/>
    <View style={styles.childContainer}>
      <View style={styles.logoContainer}>
        <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../../Assets/Images/Frame.png')} />
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Verify your email</Text>
        <Text style={styles.headingText}>address</Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.descText}>
        We’ve sent a One Time Password (OTP) to your phone number. Please enter it below.
        </Text>
      </View>
<View style={{padding: 24}}>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      </View>
      <View style={styles.buttonContainer}>
      <Button title={'VERIFY CODE'}
      onPress={()=> navigation.navigate('AddMobileNumber')}
       />
      </View>
      <View style={styles.notAccountContainer}>
        <Text style={styles.noAccountText}>Code was sent to your email address.</Text>

        <Text
         style={styles.signUpText}>loremipsum@gmail.com</Text>
      </View>
      <View style={styles.signinwithConatiner}>
        <Text style={styles.signInWithText}>RESEND CODE</Text>
       
      </View>
      <View style={styles.bottomLogo}>

      <Image 
     source={require('../../Assets/Images/Ellipse.png')} />
     </View>
    </View>
  </View>
  )
}

export default EnterOtpScreen