import React, { useState } from 'react'
import { Image, StatusBar, Text, View, ScrollView } from 'react-native'
import { Field } from 'formik'
import * as Yup from 'yup'
import AppForm from '@/Components/Form/AppForm'
import AppFormField from '../../Components/Form/AppFormField'
import AppFormSubmitButton from '@/Components/Form/AppFormSubmitButton'
import Input from '@/Components/Input/Input'
import { styles } from './styles'
import CheckBox from '@react-native-community/checkbox'
import {useFormikContext} from 'formik';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const validationSchema = Yup.object({}).shape({
  firstName: Yup.string().required('FirstName is required').label('FirstName'),
  lastName: Yup.string().required('LastName is required').label('LastName'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required')
    .label('Confirm Password'),
})

const SignUpScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} />
      <ScrollView style={styles.childContainer}>
        <AppForm
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          // onSubmit={values => console.log(values)}
          onSubmit={()=> navigation.navigate('OtpScreen')}
        >
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require('../../Assets/Images/Frame.png')}
            />
          </View>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Create your</Text>
            <Text style={styles.headingText}>Account</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.descText}>
              Lorem ipsum dolor sit consectetur elit.
            </Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.emailLabel}>First Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <Field
              style={styles.input}
              component={AppFormField}
              name="firstName"
              autoCompleteType="firstName"
            />
            <View style={styles.passwordLabel}>
              <Text style={styles.passwordLabelText}>Last Name</Text>
            </View>
            <Field
              style={styles.input}
              component={AppFormField}
              name="lastName"
              autoCompleteType="lastName"
              textContentType="lastName"
            />
            <View style={styles.passwordLabel}>
              <Text style={styles.passwordLabelText}>Email Address</Text>
            </View>
            <Field
              style={styles.input}
              // component={AppFormField}
              // name="Email Address"
              component={AppFormField}
              name="email"
              // placeholder="Email"
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <View style={styles.passwordLabel}>
              <Text style={styles.passwordLabelText}>Password</Text>
            </View>
            <Field
              style={styles.input}
              component={AppFormField}
              name="password"
              secureTextEntry
              textContentType="password"
            />
            <View style={styles.passwordLabel}>
              <Text style={styles.passwordLabelText}>Confirm Password</Text>
            </View>
            <Field
              style={styles.input}
              component={AppFormField}
              name="confirmPassword"
           secureTextEntry
           textContentType="password"
            />
          </View>

          <View style={{ paddingTop: hp('20%') }}>
            <View style={styles.notAccountContainer}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.noAccountText}>I agree to</Text>
              <Text style={styles.tACPPText}>Terms & Conditions</Text>
              <Text style={styles.noAccountText}>&</Text>
              <Text style={styles.tACPPText}>Privacy Policy</Text>
            </View>
            <AppFormSubmitButton title="SIGN UP"  />
          </View>
        </AppForm>
        <View style={styles.notAccountContainer}>
          <Text style={styles.noAccountText}>Already have an account.</Text>

          <Text style={styles.signUpText}>Sign In</Text>
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
        <Image source={require('../../Assets/Images/Ellipse.png')} />
      </ScrollView>
    </View>
  )
}

export default SignUpScreen
