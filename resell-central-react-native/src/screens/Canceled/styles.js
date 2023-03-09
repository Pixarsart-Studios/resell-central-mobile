import {
  bgLightGrey,
  bgWhite,
  mainBlue,
  primaryButton,
  strokeGray,
  strokeWhite,
  textBlack,
  textDarkGrey,
  textLightGrey,
  textSuccess,
  textValidation,
} from "@/Constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: bgWhite,
    height: "100%",
  },
  item: {
    width: "88%",
    borderRadius: 5,
    padding: 16,
    backgroundColor: bgWhite,
    marginLeft: 24,
    marginTop: 16,
    shadowColor: textLightGrey,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    elevation: 1,
  },
  itemView: {
    flexDirection: "row",
    borderRadius: 5,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  itemLeftView: {
    flexDirection: "column",
  },
  itemRightView: {
    position: "absolute",
    justifyContent: "flex-end",
    top: 0,
    left: 255,
  },
  itemName: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16.8,
  },
  detailText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    paddingTop: 4,
  },
  price: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16.8,
    color: mainBlue,
    paddingLeft: 3,
  },
  resolvedText: {
    color: textSuccess,
  },
  resolved: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginTop: 26,
    height: 25,
    borderRadius: 5,
    backgroundColor: "rgba(64, 191, 127, 0.1)",
    width: 100,
  },
  unResolved: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginTop: 26,
    height: 30,
    width: 100,
    borderRadius: 5,
    backgroundColor: "rgba(255, 186, 51, 0.1)",
  },
  unResolvedText: {
    color: textValidation,
  },
  heading: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
    paddingLeft: 24,
    paddingTop: 24,
  },
  inputContainer: {
    flex: 0.5,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
    height: "100%",
  },
  selectConditoinsLableView: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: "3%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "-85%",
  },
  selectConditoinsLabelText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  calendarIcon: {
    position: "absolute",
    right: "12%",
    top: "55%",
    zIndex: 1,
  },
  angleDown: {
    height: 15,
    width: 15,
    position: "absolute",
    left: "90%",
    top: "55%",
    zIndex: 1,
  },
  btn: {
    backgroundColor: bgWhite,
    height: 65,
    width: "93%",
    borderWidth: 2,
    borderColor: bgLightGrey,
    borderRadius: 5,
  },
  saveBtnView: {
    marginTop: 30,
  },
  cancel: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14.62,
    color: primaryButton,
    paddingLeft: "44%",
    paddingTop: 16,
  },
  dropDownView: {
    paddingLeft: 24,
  },
  labelContainer: {
    backgroundColor: strokeWhite,
    marginStart: "3.2%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "9%",
    width: 125,
    justifyContent: "center",
    alignItems: "center",
  },
  selectCategoryLable: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  buttonTextStyle: { paddingRight: "65%", color: textBlack },
});
