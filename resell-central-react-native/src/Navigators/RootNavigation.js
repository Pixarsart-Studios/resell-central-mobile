import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@/Hooks";
import MainNavigator from "./Drawer";
import AuthStack from "@/Navigators/Application";
import SignUpScreen from "@/screens/SignUpScreen/SignUpScreen";
import EnterOtpScreen from "@/screens/EnterOtpScreen/EnterOtpScreen";
import AddMobileNumberScreen from "@/screens/AddMobileNumberScreen/AddMobileNumberScreen";
import EnterOtpAgainScreen from "@/screens/EnterOtpAgain/EnterOtpAgainScreen";
import ForgotPasswordScreen from "@/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import EnterOtpToResetPassword from "@/screens/EnterOtpToResetPassword/EnterOtpToResetPassword";
import StoreInformation from "@/screens/StoreInformation/StoreInformation";
import Dashboard from "@/screens/Dashboard/Dashboard";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const RootNavigation = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default RootNavigation;
