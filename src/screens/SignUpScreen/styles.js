import {
  bgBlack,
  bgLightGrey,
  bgWhite,
  gradiant,
  mainBlue,
  primaryButton,
  secondaryBlue,
  strokeBlue,
  strokeGray,
  strokeWhite,
  textDarkGrey,
  textError,
  textLightGrey,
} from "@/Constants/Colors";
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
    height: hp("100%"),
    width: wp("100%"),
    backgroundColor: bgWhite,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "1.5%",
  },
  logo: {
    height: hp("17%"),
    width: wp("30%"),
  },
  heading: {
    paddingLeft: 24,
    paddingTop: 24,
  },
  headingText: {
    fontSize: 24,
    lineHeight: 28.8,
    color: bgBlack,
    fontFamily: "ProximaNovaA-Bold",
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
    marginStart: "9%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "4.8%",
  },
  firstNameLabel: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  labelView: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: 15,
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "8.5%",
  },
  labelText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  inputContainer: {
    height: hp("17%"),
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 35,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
    height: 50,
    paddingLeft: 10,
  },
  termsAndConditionsAndButtonView: {
    paddingTop: hp("20%"),
  },
  tACPPText: {
    color: secondaryBlue,
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 19,
  },
  btnView: {
    paddingTop: 24,
  },
  checkboxContainer: {
    flexDirection: "row",
    paddingTop: 16,
    paddingLeft: 24,
  },
  text: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: textDarkGrey,
    paddingTop: 19,
  },
  alreadyHaveAnAccountView: {
    paddingLeft: 86,
    flexDirection: "row",
    paddingTop: 16,
  },
  alreadyHaveAccountText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  signInText: {
    color: primaryButton,
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16.8,
    paddingLeft: 3,
  },
  signinwithConatiner: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
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
    marginRight: 14,
    height: 40,
    width: 40,
    marginTop: 16,
  },
  googleLogo: {
    marginLeft: 14,
    height: 40,
    width: 40,
    marginTop: 16,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 3,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: bgLightGrey,
  },
  innerRedio: {
    height: 22,
    width: 22,
    borderRadius: 3,
    backgroundColor: bgLightGrey,
  },
  optionStyle: {
    width: wp(10),
    paddingTop: 19,
    // alignItems: "center",
  },
  ellipse: {},
});