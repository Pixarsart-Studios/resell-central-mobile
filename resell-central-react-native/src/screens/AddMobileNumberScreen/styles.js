import {
  bgBlack,
  bgWhite,
  strokeBlue,
  strokeGray,
  strokeWhite,
  textDarkGrey,
  textError,
} from "@/Constants/Colors";
// import { proximaNovaAltBold, proximaNovaRegular } from "@/Constants/Fonts";
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
    marginStart: 38,
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "1.5%",
  },
  contactLabel: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: "34%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "3.5%",
  },
  contactLabelText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  inputContainer: {
    paddingRight: "45%",
    paddingLeft: 24,
    flexDirection: "row",
    paddingTop: 24,
  },
  countryCodeInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
    // borderEndColor: 'red'
    width: wp("19%"),
    height: hp("7%"),
  },
  numberInput: {
    width: wp("60%"),
    height: hp("7%"),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
  },
  buttonContainer: {},
  textContainer: {
    paddingRight: 24,
    paddingLeft: 24,
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20.8,
    paddingTop: 19,
    paddingBottom: 24,
    color: textDarkGrey,
  },
  bottomLogoView: {
    paddingTop: hp("36%"),
  },
});
