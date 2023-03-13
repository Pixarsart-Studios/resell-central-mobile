import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import React, { useContext } from "react";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import { styles } from "./styles";
import MainHeader from "@/Components/MainHeader/MainHeader";
import AuthContext from "@/Config/AuthContext";

const AddMobileNumberScreen = ({ navigation }) => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#FFFFFF"} />
      <MainHeader onPress={() => navigation?.goBack()} back={language?.back} />
      <View style={styles.childContainer}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../../Assets/Images/Frame.png")}
          />
        </View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>{language?.addMobileNumber}</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            {language?.toEnhanceYourAccountSecurityAddAndVerifyYourMobileNumber}
          </Text>
        </View>
        <View style={styles.contactLabel}>
          <Text style={styles.contactLabelText}>Contact No.</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.countryCodeInput} />
          <Input style={styles.numberInput} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {
              language?.byEnrollingAMobilePhoneNumberYouConsentToReceiveAutomatedSecurityNotificationsViaTextMessagesFromResellCentral
            }
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={language?.ADDMOBILENUMBER}
            onPress={() => navigation.navigate("AgainOtpScreen")}
          />
        </View>
        <View style={styles.bottomLogoView}>
          <Image source={require("../../Assets/Images/Ellipse.png")} />
        </View>
      </View>
    </View>
  );
};

export default AddMobileNumberScreen;
