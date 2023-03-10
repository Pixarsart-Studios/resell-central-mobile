import {
  bgBlack,
  bgWhite,
  mainBlue,
  strokeBlue,
  strokeGray,
  strokeWhite,
  textDarkGrey,
  textError,
} from "@/Constants/Colors";
import { proximaNovaAltBold, proximaNovaRegular } from "@/Constants/Fonts";
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
    paddingTop: 40,
  },
  logo: {
    height: hp("17%"),
    width: wp("30%"),
  },
  labelContainer: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: 38,
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "1.5%",
  },
  emailLabel: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  passwordLabel: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: 15,
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "8.5%",
  },
  passwordLabelText: {
    fontSize: 14,
    lineHeight: 18.2,
  },
  inputContainer: {
    // height: hp('17%'),
    paddingLeft: 24,
    paddingRight: 24,
    flex: 0.2,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
    // borderEndColor: 'red'
    height: 50,
  },
  heading: {
    padding: 24,
  },
  headingText: {
    fontSize: 16,
    lineHeight: 19.2,
    color: bgBlack,
    // fontFamily: proximaNovaAltBold,
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
    // fontFamily: proximaNovaRegular,
    color: textDarkGrey,
  },
  buttonContainer: {
    paddingTop: 57,
  },
  inputContainerForDescription: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  categoryTypeView: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 24,
  },
  categoryTypeTextView: {
    paddingLeft: 24,
  },
  categoryDescText: {
    paddingTop: 8,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20.8,
    paddingRight: 15,
  },
  categoryOption: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20.8,
  },
  cautionText: {
    paddingLeft: 24,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20.8,
  },
  addAnotherConditionsText: {
    color: mainBlue,
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14.62,
    paddingTop: 8,
    paddingLeft: 232,
  },
});
