import React, { useState, useContext } from "react";
import {
  Image,
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Field } from "formik";
import * as Yup from "yup";
import AppForm from "@/Components/Form/AppForm";
import AppFormField from "../../Components/Form/AppFormField";
import AppFormSubmitButton from "@/Components/Form/AppFormSubmitButton";
import Input from "@/Components/Input/Input";
import { styles } from "./styles";
import CheckBox from "@react-native-community/checkbox";
import { useFormikContext } from "formik";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AuthContext from "@/Config/AuthContext";
import MainHeader from "@/Components/MainHeader/MainHeader";

export const validationSchema = Yup.object({}).shape({
  firstName: Yup.string().required("FirstName is required").label("FirstName"),
  lastName: Yup.string().required("LastName is required").label("LastName"),
  // email: Yup.string()
  //   .email("Please enter valid email")
  //   .required("Email is required")
  //   .label("Email"),
  // password: Yup.string()
  //   .matches(/\w*[a-z]\w*/, "Password must have a small letter")
  //   .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
  //   .matches(/\d/, "Password must have a number")
  //   .min(8, ({ min }) => `Password must be at least ${min} characters`)
  //   .required("Password is required")
  //   .label("Password"),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password")], "Passwords do not match")
  //   .required("Confirm password is required")
  //   .label("Confirm Password"),
});

const SignUpScreen = ({ navigation }) => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#FFFFFF"} />
      <ScrollView style={styles.childContainer}>
        <AppForm
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={() => navigation.navigate("OtpScreen")}
        >
          <MainHeader
            onPress={() => navigation?.goBack()}
            back={language?.back}
          />
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require("../../Assets/Images/Frame.png")}
            />
          </View>
          <View style={styles.heading}>
            <Text style={styles.headingText}>{language?.createYour}</Text>
            <Text style={styles.headingText}>{language?.account}</Text>
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.descText}>
              {language?.loremIpsumolorSitConsecteturElit}
            </Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.firstNameLabel}>{language?.firstName}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Field
              style={styles.input}
              component={AppFormField}
              name="firstName"
              autoCompleteType="firstName"
            />
            <View style={styles.labelView}>
              <Text style={styles.labelText}>{language?.lastName}</Text>
            </View>
            <Field
              style={styles.input}
              component={AppFormField}
              name="lastName"
              autoCompleteType="lastName"
              textContentType="lastName"
            />
            <View style={styles.labelView}>
              <Text style={styles.labelText}>{language?.emailAddress}</Text>
            </View>
            <Field
              style={styles.input}
              component={AppFormField}
              name="email"
              autoCompleteType="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <View style={styles.labelView}>
              <Text style={styles.labelText}>{language?.password}</Text>
            </View>
            <Field
              style={styles.input}
              component={AppFormField}
              name="password"
              secureTextEntry
              textContentType="password"
            />
            <View style={styles.labelView}>
              <Text style={styles.labelText}>{language?.confirmPassword}</Text>
            </View>
            <Field
              style={styles.input}
              component={AppFormField}
              name="confirmPassword"
              secureTextEntry
              textContentType="password"
            />
          </View>
          <View style={styles.termsAndConditionsAndButtonView}>
            <View style={styles.checkboxContainer}>
              <View style={styles.optionStyle}>
                <TouchableOpacity style={[styles.radio]}>
                  <View style={styles.innerRedio} />
                </TouchableOpacity>
              </View>
              <Text style={styles.text}>{language?.iAgreeTo}</Text>
              <Text style={styles.tACPPText}>
                {language?.termsAndConditions}
              </Text>
              <Text style={styles.text}>{language?.and}</Text>
              <Text style={styles.tACPPText}>{language?.privacyPolicy}</Text>
            </View>
            <View style={styles.btnView}>
              <AppFormSubmitButton title={language?.signUpCapital} />
            </View>
          </View>
        </AppForm>
        <View style={styles.alreadyHaveAnAccountView}>
          <Text style={styles.alreadyHaveAccountText}>
            {language?.alreadyHaveAnAccount}
          </Text>
          <Text style={styles.signInText}>{language?.signInSmall}</Text>
        </View>
        <View style={styles.signinwithConatiner}>
          <Text style={styles.signInWithText}>{language?.orSignInWith}</Text>
          <View style={styles.signInOptionContainer}>
            <Image
              style={styles.fbLogo}
              source={require("../../Assets/Images/facebooklogo.png")}
            />
            <Image
              style={styles.googleLogo}
              source={require("../../Assets/Images/googleLogo.png")}
            />
          </View>
        </View>
        <Image
          style={styles.ellipse}
          source={require("../../Assets/Images/Ellipse.png")}
        />
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
