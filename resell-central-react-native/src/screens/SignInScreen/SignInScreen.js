import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import { styles } from "./styles";
import Env from "../../../api/Env";
import auth from "@react-native-firebase/auth";
import MindAxios from "../../../api/MindAxios";
import { useTranslation } from "react-i18next";
import AuthContext from "@/Config/AuthContext";
import Helper from "@/Helper";
import Loader from "@/Components/Loader/Loader";

// Helper
const SignInScreen = ({ props, navigation }) => {
  const { t } = useTranslation();
  const { signIn } = useContext(AuthContext);
  const { myState } = useContext(AuthContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errMsg, setErrMsgs] = useState("");
  const [passErrMsg, setpassErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { language } = myState;

  const resetForm = () => {
    setemail("");
    setpassword("");
  };

  const checkValidations = () => {
    let isValid = true;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var re = /^(?!.* )/;
    if (!email) {
      setErrMsgs("Email required");
      isValid = false;
    } else if (reg.test(email.trim()) == false) {
      console.log("comming here", email);
      setErrMsgs("Email is not valid");
      isValid = false;
    }

    if (!password) {
      setpassErrMsg("Password is required");
      isValid = false;
    } else if (re.test(password) == false) {
      setpassErrMsg("Password is not valid");
      isValid = false;
    }

    if (isValid) {
      setErrMsgs("");
      setpassErrMsg("");
      loginWithEmailAndPassword();
    }
  };

  const loginWithEmailAndPassword = async () => {
    setLoading(true);
    // console.log(email, password);
    // const fcmToken = await Helper.getData("fcmToken");
    // dispatch(allActions.DataAction.ActivityModal(true));
    try {
      await auth().signInWithEmailAndPassword(email.trim(), password);
      let user = auth().currentUser;
      const firebaseToken = await user.getIdToken();
      // console.log("firebase", firebaseToken);
      // return;
      const { data, e } = await MindAxios.post(Env.createUrl("signin"), {
        firebase_token: firebaseToken,
        email: email.trim(),
        password: password,
        // device_name: "mobile",
        // fcm_token: fcmToken,
      });
      // console.log(data);
      const error = e?.response?.data;
      // console.log("data", error);
      // dispatch(allActions.DataAction.ActivityModal(false));
      if (data?.success) {
        // resetForm();
        // let token = data?.result?.token;
        // let id = data?.result?.user?.id;
        const {
          result: { user, token },
        } = data;
        let { id, is_email_verified, first_name } = user;
        // console.log("user", user);
        // if (is_email_verified == 1) {
        //   console.log(0);
        // console.log("user->", user);
        // console.log("token->", token);
        await Helper.setUser(user);
        await Helper.storeData("loginMethod", "email");
        await Helper.storeData("loginToken", token);
        await Helper.storeData("userId", id.toString());
        await Helper.storeData("homeToken", token);
        // FINGER PRINT AUTH

        await Helper.storeData("email", email);
        await Helper.storeData("password", password);
        setLoading(false);
        // dispatch(allActions.DataAction.ActivityModal(false));
        // await Helper.showToastMessage("Welcome");
        signIn(token);
        navigation.replace("MainNavigator");

        // } else {
        //   // return;
        //   let verifybody = {
        //     email: email,
        //     type: "EmailVerification",
        //   };

        //   const res = await MindAxios.post(
        //     Env.createUrl("emails/authentication"),
        //     verifybody
        //   );
        //   // console.log("verify response-->", res);
        //   if (res?.status == 200) {
        //     await Helper.showToastMessage(language?.pleaseVerifyFirst);
        //     await Helper.storeData("loginToken", token);
        //     await Helper.storeData("userId", id.toString());
        //     navigation.navigate("confirm", {
        //       values: { email, id, firstName: first_name },
        //     });
        //   } else {
        //     // dispatch(allActions.DataAction.ActivityModal(false));
        //     const {
        //       e: {
        //         response: {
        //           data: { message },
        //         },
        //       },
        //     } = res;
        //     alert("fff " + message);
        //   }
        // }
      } else if (error) {
        // dispatch(allActions.DataAction.ActivityModal(false));
        setLoading(false);
        alert(error?.message);
      }
    } catch (error) {
      // dispatch(allActions.DataAction.ActivityModal(false));
      // console.log("error", error);
      setLoading(false);
      alert(error);
    }
  };

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
          <Input
            value={email}
            onChangeText={(val) => setemail(val)}
            placeholder={"Enter email"}
            style={styles.input}
          />
          {errMsg != "" && (
            <Text style={{ color: "red", alignSelf: "flex-end" }}>
              {errMsg}
            </Text>
          )}
          <View style={styles.passwordLabel}>
            <Text style={styles.passwordLabelText}>{language?.password}</Text>
          </View>
          <Input
            value={password}
            onChangeText={(val) => setpassword(val)}
            placeholder={"Enter Password"}
            style={styles.input}
          />
          {passErrMsg != "" && (
            <Text style={{ color: "red", alignSelf: "flex-end" }}>
              {passErrMsg}
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
          style={styles.forgotTextContainer}
        >
          <Text style={styles.forgotText}>{language?.forgotPassword}</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              checkValidations();
              // navigation.replace("MainNavigator");
            }}
            title={language?.signIn}
          />
        </View>
        <View style={styles.notAccountContainer}>
          <Text style={styles.noAccountText}>{language?.dontHaveAccount}</Text>
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={styles.signUpText}
          >
            {language?.signUp}
          </Text>
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
        <View style={styles.bottomLogoView}>
          <Image source={require("../../Assets/Images/Ellipse.png")} />
        </View>
      </View>
      {loading && <Loader text={"Signing In"} />}
    </View>
  );
};

export default SignInScreen;
