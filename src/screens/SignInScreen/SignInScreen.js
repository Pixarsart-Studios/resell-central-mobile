import { View, Text, TextInput, StyleSheet, Image, StatusBar } from 'react-native'
import React,{useContext} from 'react'
import Input from '@/Components/Input/Input'
import Button from '@/Components/Button/Button'
import { styles } from './styles'
import MainHeader from '@/Components/MainHeader/MainHeader'
import { useTranslation } from 'react-i18next'
import AuthContext from '@/Config/AuthContext'
const SignInScreen = ({ props, navigation }) => {

  const { t } = useTranslation()



  const {myState} = useContext(AuthContext)
  const {language} = myState;

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
          <Text style={styles.headingText}>{language?.resellCenteral}</Text>
          <Text style={styles.headingText}>{language?.seller}</Text>
        </View>
        {/* <Text style={{color:'red',height:40,width:'100%'}} >{language?.welcome}</Text> */}
        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            {language?.loremIpsumolorSitConsecteturElit}
          </Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.emailLabel}>{language?.email}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.input} />
          <View style={styles.passwordLabel}>
            <Text style={styles.passwordLabelText}>{language?.password}</Text>
          </View>
          <Input style={styles.input} />
        </View>
        <View style={styles.forgotTextContainer}>
          <Text style={styles.forgotText}
          >{language?.forgotPassword}</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button title={language?.signIn} 
         />
        </View>
        <View style={styles.notAccountContainer}>
          <Text style={styles.noAccountText}>{language?.dontHaveAccount}</Text>
          <Text
          onPress={()=> navigation.navigate('SignUp')}
           style={styles.signUpText}>{language?.signUp}</Text>
        </View>
        <View style={styles.signinwithConatiner}>
          <Text style={styles.signInWithText}>{language?.orSignInWith}</Text>
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
