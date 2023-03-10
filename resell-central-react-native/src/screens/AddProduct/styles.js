import {
  bgBlack,
  bgLightGrey,
  bgWhite,
  primaryButton,
  strokeBlue,
  strokeGray,
  strokeWhite,
  textDarkGrey,
  textError,
  textLightGrey,
} from "@/Constants/Colors";
import { proximaNovaAltBold, proximaNovaRegular } from "@/Constants/Fonts";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: bgWhite,
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderColor: bgLightGrey,
    borderRadius: 5,
    flexDirection: "row",
  },
  childContainer: {
    height: hp("100%"),
    width: wp("100%"),
    backgroundColor: bgWhite,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "8%",
  },
  logo: {
    height: hp("17%"),
    width: wp("30%"),
  },
  labelContainer: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: "8.2%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "3%",
  },
  selectCategoryLable: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  selectConditoinsLableView: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: "3%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "4%",
  },
  selectConditoinsLabelText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  inputContainer: {
    flex: 0.3,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
    height: "95%",
  },
  heading: {
    padding: 24,
  },
  headingText: {
    fontSize: 16,
    lineHeight: 19.2,
    color: bgBlack,
    fontFamily: "ProximaNovaA-Bold",
    fontWeight: "700",
  },

  buttonContainer: {
    paddingTop: 24,
  },
  centeredView: {
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "48%",
  },
  modalLine: {
    height: 3,
    width: "35%",
    backgroundColor: bgLightGrey,
    marginLeft: "30%",
  },
  modalHeading: {
    paddingLeft: 24,
    paddingTop: 24,
  },
  headingTextModal: {
    fontSize: 18,
    lineHeight: 28.8,
    color: bgBlack,
    fontWeight: "700",
  },
  modalImagesView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 24,
  },
  uploadImage: {
    height: 125,
    width: 155,
  },
  cancleModal: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19.49,
    color: primaryButton,
    paddingLeft: "43%",
    paddingTop: 16,
  },
});
