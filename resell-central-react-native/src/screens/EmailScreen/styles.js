import { bgLightGrey, bgWhite, mainBlue, primaryButton, textDarkGrey, textError, textSuccess, textValidation } from "@/Constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  checkBoxContainer: {},
  checkBoxView: {
    flexDirection: "row",
    marginVertical: 10,
    paddingLeft: 24,
    paddingTop: 24,
  },
  checkBox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: bgLightGrey,
    backgroundColor: bgLightGrey,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedCheckBox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: primaryButton,
    backgroundColor: primaryButton,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    color: bgWhite,
  },
  option: {
    paddingLeft: 24,
  },
  itemHeader: {},
  headingText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16.8,
    paddingLeft: 24,
  },
  statusText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16.8,
    paddingLeft: 167,
  },
  line: {
    borderWidth: 0.15,
    backgroundColor: textDarkGrey,
    marginLeft: 24,
    marginTop: 8,
    marginRight:24
  },
  item: {
   
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
    top: -10,
    left: 255,
  },
  itemName: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    paddingLeft:24,
    paddingTop:24,
    color: textDarkGrey
  },
  detailText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    paddingTop: 4,
    paddingLeft: 24
  },
  price: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16.8,
    color: mainBlue,
    paddingLeft: 3,
  },
  activeStatusText: {
    color: textSuccess,
  },
  activeStatus: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 42,
    height: 25,
    borderRadius: 5,
    backgroundColor: "rgba(64, 191, 127, 0.1)",
    marginLeft: 70,
    width: 60
  },

  lowInStock: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    height: 30,
    width: 90,
    borderRadius: 5,
    backgroundColor: "rgba(255, 186, 51, 0.1)",
    marginLeft: 38

  },
  lowInStockText: {
    color: textValidation,
  },
  outOfStock: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginTop: 26,
    height: 30,
    width: 100,
    borderRadius: 5,
    backgroundColor: "rgba(255, 51, 51, 0.1)",
  },
  outOfStockText: {
    color: textError,
  },
  emailText: {
    fontWeight:'400',
    fontSize: 16,
    lineHeight:20.8,
    paddingLeft: 24
  },
  floatingButtonView: {
    paddingTop: '80%',
    paddingLeft: 345
  },
  floatingButton: {
    height: 45,
    width: 45
  },
  productOptionImage: { 
    height: 20, 
    width: 25,
    position: 'absolute',
    right: -25
   },
});
