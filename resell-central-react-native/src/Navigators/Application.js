import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import SignInScreen from '@/screens/SignInScreen/SignInScreen'
import SignUpScreen from '@/screens/SignUpScreen/SignUpScreen'
import EnterOtpScreen from '@/screens/EnterOtpScreen/EnterOtpScreen'
import AddMobileNumberScreen from '@/screens/AddMobileNumberScreen/AddMobileNumberScreen'
import EnterOtpAgainScreen from '@/screens/EnterOtpAgain/EnterOtpAgainScreen'
import ForgotPasswordScreen from '@/screens/ForgotPasswordScreen/ForgotPasswordScreen'
import EnterOtpToResetPassword from '@/screens/EnterOtpToResetPassword/EnterOtpToResetPassword'
import StoreInformation from '@/screens/StoreInformation/StoreInformation'
import Dashboard from '@/screens/Dashboard/Dashboard'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="OtpScreen" component={EnterOtpScreen} />
        <Stack.Screen
          name="AddMobileNumber"
          component={AddMobileNumberScreen}
        />
        <Stack.Screen name="AgainOtpScreen" component={EnterOtpAgainScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="EnterOtpToResetPassword"
          component={EnterOtpToResetPassword}
        />
        <Stack.Screen name="StoreInformation" component={StoreInformation} />
        {/* <Stack.Screen name="DashboardScreen" component={Dashboard} /> */}
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
