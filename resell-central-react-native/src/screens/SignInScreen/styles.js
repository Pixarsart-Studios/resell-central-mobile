import {
  bgBlack,
  bgWhite,
  strokeBlue,
  strokeGray,
  strokeWhite,
  textBlack,
  textDarkGrey,
  textError,
} from "@/Constants/Colors";
// import { proximaNovaAltBold, proximaNovaRegular } from '@/Constants/Fonts'
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    flex:1,
    backgroundColor: bgWhite,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: hp("15%"),
  },
  logo: {
    height: hp("17%"),
    width: wp("30%"),
  },
  heading: {
    paddingLeft: 24,
    paddingTop: 5,
  },
  headingText: {
    fontSize: 24,
    lineHeight: 28.8,
    color: bgBlack,
    fontFamily: "ProximaNova-Bold",
    fontWeight: "700",
  },
  descContainer: {
    paddingLeft: 24,
    paddingTop: 8,
  },
  descText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20.8,
    fontFamily: "ProximaNova-Regular",
    color: textDarkGrey,
  },
  labelContainer: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: "8.2%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: hp("3.5%"),
  },
  emailLabel: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
    fontFamily: "ProximaNova-Regular",
    width: 53,
    paddingLeft: 10,
  },
  inputContainer: {
    height: hp("20%"),
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: hp('2%'),
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
    height: hp("7%"),
    color: textBlack,
  },
  passwordLabel: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: "2%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: hp("2.5%"),
  },
  passwordLabelText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
    width: 80,
    paddingLeft: 10,
    fontFamily: "ProximaNova-Regular",
  },
  passwordInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
    height: hp("7%"),
    color: textDarkGrey,
    marginTop: hp('1%'),
  },
  eyeIcon: {
    position: "absolute",
    top: hp("15%"),
    right: "11%",
    color: strokeGray,
  },
  emailRequiredText: {
    color: "red",
    position: "absolute",
    top: hp("10%"),
    alignSelf: "flex-end",
    paddingRight: 26,
  },
  passwordRequiredText: {
    color: "red",
    position: "absolute",
    top: hp("21%"),
    alignSelf: "flex-end",
    paddingRight: 24,
  },
  forgotTextContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 24,
  },
  forgotText: {
    color: textError,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    paddingTop: hp("3.5%"),
  },
  buttonContainer: {
    paddingTop: hp('2.8%'),
  },
  notAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: hp("2.5%"),
  },
  noAccountText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: textDarkGrey,
  },
  signUpText: {
    color: strokeBlue,
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16.8,
    paddingLeft: 3,
  },
  signinwithConatiner: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp("4.7%"),
  },
  signInWithText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: textDarkGrey,
  },
  signInOptionContainer: {
    flexDirection: "row",
  },
  fbLogo: {
    marginRight: "2.5%",
    height: 45,
    width: 45,
    marginTop: hp("2%"),
  },
  googleLogo: {
    marginLeft: "3%",
    height: 45,
    width: 45,
    marginTop: hp("2%"),
  },
  ellipse: {
    height: hp('7.2%'),
    width: hp('11%'),
    resizeMode: "contain",
  },
});
