import { View, Text, TextInput, StyleSheet, Image, StatusBar } from 'react-native'
import React from 'react'
import Input from '@/Components/Input/Input'
import Button from '@/Components/Button/Button'
import { styles } from './styles'
import MainHeader from '@/Components/MainHeader/MainHeader'

const SignInScreen = ({ props, navigation }) => {
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
          <Text style={styles.headingText}>Resell Central</Text>
          <Text style={styles.headingText}>Seller</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit consectetur elit.
          </Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.emailLabel}>Email</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.input} />
          <View style={styles.passwordLabel}>
            <Text style={styles.passwordLabelText}>Password</Text>
          </View>
          <Input style={styles.input} />
        </View>
        <View style={styles.forgotTextContainer}>
          <Text style={styles.forgotText}
          >Forgot password</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button title={'SIGN IN'}
        
         />
        </View>
        <View style={styles.notAccountContainer}>
          <Text style={styles.noAccountText}>Don't have account.</Text>
          <Text
          onPress={()=> navigation.navigate('SignUp')}
           style={styles.signUpText}>Sign UP</Text>
        </View>
        <View style={styles.signinwithConatiner}>
          <Text style={styles.signInWithText}>Or Sign in with</Text>
          <View style={styles.signInOptionContainer}>
            <Image
              style={styles.fbLogo}
              source={require('../../Assets/Images/facebooklogo.png')}
            />
            <Image
              style={styles.googleLogo}
              source={require('../../Assets/Images/googleLogo.png')}
            />
          </View>
        </View>
        <View style={styles.bottomLogoView}>
        <Image 
       source={require('../../Assets/Images/Ellipse.png')} />
       </View>
      </View>
    </View>
  )
}

export default SignInScreen
