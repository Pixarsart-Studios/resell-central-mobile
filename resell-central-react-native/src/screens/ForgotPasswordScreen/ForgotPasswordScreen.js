import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import { styles } from "./styles";

const ForgotPasswordScreen = ({ props, navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#FFFFFF"} />
      <View style={styles.childContainer}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../../Assets/Images/Frame.png")}
          />
        </View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Reset your password</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            Enter your email address to reset your password.
          </Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.emailLabel}>Email Address</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.input} />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title={"RESET PASSWORD"}
            onPress={() => navigation.navigate("EnterOtpToResetPassword")}
          />
        </View>
        <View style={styles.notAccountContainer}>
          <Text style={styles.noAccountText}>Remember your password.</Text>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Text style={styles.signUpText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomLogo}>
          <Image source={require("../../Assets/Images/Ellipse.png")} />
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
