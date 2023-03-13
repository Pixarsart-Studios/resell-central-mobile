import React, { useState, useContext } from "react";
import {
  Image,
  StatusBar,
  Text,
  View,
  Alert,
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
import Env from "../../../api/Env";
import auth from "@react-native-firebase/auth";
import MindAxios from "../../../api/MindAxios";
import CheckBox from "@react-native-community/checkbox";
import { useFormikContext } from "formik";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AuthContext from "@/Config/AuthContext";
import MainHeader from "@/Components/MainHeader/MainHeader";
import Loader from "@/Components/Loader/Loader";
import Helper from "@/Helper";

export const validationSchema = Yup.object({}).shape({
  firstName: Yup.string().required("First name is required").label("FirstName"),
  lastName: Yup.string().required("Last name is required").label("LastName"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    // .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required")
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required")
    .label("Confirm Password"),
});

const SignUpScreen = ({ navigation }) => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [agree, setAgree] = useState(true);
  const [loading, setLoading] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleConfirm = async (values, reset) => {
    // dispatch(allActions.DataAction.AppLoader(true));
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      await goto(values, reset);
      // await auth().currentUser.sendEmailVerification();
      // const user = auth().currentUser;
    } catch (error) {
      // console.log("error", error);
      // dispatch(allActions.DataAction.AppLoader(false));
      setLoading(false);
      alert(error);
      // setCheck(false);
    }
  };

  const goto = async (values, reset) => {
    // dispatch(allActions.DataAction.ActivityModal(false));
    const user = auth().currentUser;
    let uid = user?._user?.uid;
    console.log("uid here", user?._user?.uid);
    const firebaseToken = await user.getIdToken();
    // const fcmToken = await Helper.getData("fcmToken");
    // let getAddress = address?.address?.address ? address?.address : null;
    // let my_address = getAddress !== null ? JSON.stringify(getAddress) : null;
    const body = {
      // firebase_token: firebaseToken,
      name: values?.firstName,
      last_name: values?.lastName,
      email: values?.email,
      phone: values?.phone,
      password: values?.password,
      password_confirmation: values?.confirmPassword,
      uid: uid,
      // username: values?.userName,
      // fcm_token: fcmToken,
      // device_name: "mobile",
      // is_email_verified: 0,
    };
    console.log("body-->", body);
    try {
      const response = await MindAxios.register(Env.createUrl("signup"), body);
      console.log("response-->", response);
      if (response?.status == 200) {
        let result = response?.data?.request?.payload;
        let token = result?.token;
        let id = result?.user?.id;
        // await Helper.storeData("loginToken", token);
        // await Helper.storeData("userId", id.toString());
        console.log("result", result);
        // let appendVal = Helper.deepCopy(values);
        // appendVal.address = address?.address?.address ? address?.address : null;
        // appendVal.dob = dob;
        // appendVal.gender = gender;
        // appendVal.language = selectedLang;
        // appendVal.id = id;
        // appendVal.token = token;
        // dispatch(allActions.DataAction.User(appendVal));
        // let sendParams = { email: values?.email, id, token };
        reset();
        setLoading(false);
        // navigation?.goBack();
      } else {
        // dispatch(allActions.DataAction.AppLoader(false));
        const {
          e: {
            response: {
              data: { message },
            },
          },
        } = response;
        setLoading(false);
        alert(message);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#FFFFFF"} />
      <MainHeader onPress={() => navigation?.goBack()} back={language?.back} />
      <View style={[styles.logoContainer, { paddingBottom: 30 }]}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../../Assets/Images/Frame.png")}
        />
      </View>
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
          onSubmit={(values, { resetForm }) => {
            if (!agree) {
              Alert.alert("", "Please agree to the terms and conditions!");
            } else {
              console.log(values);
              navigation.navigate("OtpScreen");
              // handleConfirm(values, resetForm);
              // registerWithEmailAndPassword(values, resetForm);
            }
          }}
        >
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
              <Text style={styles.labelText}>{"Phone No."}</Text>
            </View>
            <Field
              style={styles.input}
              component={AppFormField}
              name="phone"
              autoCompleteType="phone"
              keyboardType="phone-pad"
              textContentType="phone"
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
          {/* <View style={{ height: 40, backgroundColor: "red" }} /> */}
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
      </ScrollView>
      <Image
        style={styles.ellipse}
        source={require("../../Assets/Images/Ellipse.png")}
      />
      {loading && <Loader text={"Signing up"} />}
    </View>
  );
};

export default SignUpScreen;
