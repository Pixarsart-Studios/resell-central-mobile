import { View, Text, TextInput, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'
import Input from '@/Components/Input/Input'
import Button from '@/Components/Button/Button'
import { styles } from './styles'

const AddMobileNumberScreen = ({navigation}) => {
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
          <Text style={styles.headingText}>Add mobile number</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>
          To enhance your account security, add and verify your mobile number.
          </Text>
        </View>
        <View style={styles.passwordLabel}>
          <Text style={styles.passwordLabelText}>Contact No</Text>
        </View>
        {/* <View style={styles.labelContainer}>
          <Text style={styles.emailLabel}>Email</Text>
        </View> */}
        <View style={styles.inputContainer}>
          <Input style={styles.countryCodeInput} />
          <Input style={styles.numberInput} />
        </View>
        <View style={styles.forgotTextContainer}>
          <Text style={styles.forgotText}>By enrolling a mobile phone number, you consent to receive automated security notifications via text messages from Resell Central.</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button title={'ADD MOBILE NUMBER'}
        onPress={()=> navigation.navigate('AgainOtpScreen')}
         />
        </View>
        <View style={styles.bottomLogoView}>

        <Image 
        
        source={require('../../Assets/Images/Ellipse.png')} />
      </View>
        </View>
    </View>
  )
}

export default AddMobileNumberScreen