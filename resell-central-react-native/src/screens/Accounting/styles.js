import { StyleSheet } from "react-native";
import {
  bgLightGrey,
  bgWhite,
  mainBlue,
  primaryButton,
  strokeBlue,
  textDarkGrey,
  textLightGrey,
} from "@/Constants/Colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  headerImageStyle: {
    height: 13,
    width: 20,
  },
  backgroundImageView: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 24,
  },
  linearGradient: {
    height: 170,
    width: "72%",
    borderRadius: 5,
  },
  priceAndDayInCardView: { 
    flexDirection: "row"
 },
  linearGradient2: {
    height: 170,
    width: "20%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  upgradePlanButton: {
    width: 100,
  },
  addLogo: {
    height: 30,
    width: 30,
  },
  addExpenseText: {
    color: bgWhite,
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 12.18,
  },
  rightView: {
    paddingTop: 24,
  },
  sameText: {
    color: bgWhite,
  },
  bussinessPlanText: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21.6,
    color: bgWhite,
  },
  yearSpanView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  priceColumnView: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  priceText: {
    color: bgWhite,
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16.8,
  },
  dayText: {
    color: bgWhite,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
  },
  leftImageViewContainer : { 
    flexDirection: "row", 
    justifyContent: "space-evenly" 
  },
  leftView: {
    paddingTop: 24,
    height: 100,
  },
  rightImageView: {
    justifyContent: "center",
    alignItems: "center",
  },
  addExpenseBtnView: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
  },
  headingText: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19.2,
    paddingLeft: 24,
    paddingTop: 24,
  },
  barChartMainView: {
    margin: 24,
  },
  barChartView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 24,
  },
  barChartPairView: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingTop: 16,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  mondayBlue: {
    height: 80,
    width: 5,
    backgroundColor: strokeBlue,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  mondayGrey: {
    height: 120,
    width: 5,
    backgroundColor: textLightGrey,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginLeft: 2,
  },
  tuesdayBlue: {
    height: 106,
    width: 5,
    backgroundColor: strokeBlue,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  tuesdayGrey: {
    height: 80,
    width: 5,
    backgroundColor: textLightGrey,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginLeft: 2,
  },
  wedBlue: {
    height: 140,
    width: 5,
    backgroundColor: strokeBlue,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  wedGrey: {
    height: 60,
    width: 5,
    backgroundColor: textLightGrey,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginLeft: 2,
  },
  thuBlue: {
    height: 105,
    width: 5,
    backgroundColor: strokeBlue,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  thuGrey: {
    height: 120,
    width: 5,
    backgroundColor: textLightGrey,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginLeft: 2,
  },
  friBlue: {
    height: 130,
    width: 5,
    backgroundColor: strokeBlue,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  friGrey: {
    height: 115,
    width: 5,
    backgroundColor: textLightGrey,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginLeft: 2,
  },
  satBlue: {
    height: 60,
    width: 5,
    backgroundColor: strokeBlue,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  satGrey: {
    height: 50,
    width: 5,
    backgroundColor: textLightGrey,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginLeft: 2,
  },
  sunBlue: {
    height: 80,
    width: 5,
    backgroundColor: strokeBlue,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  sunGrey: {
    height: 60,
    width: 5,
    backgroundColor: textLightGrey,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginLeft: 2,
  },
  weekDaysView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: 65,
    paddingTop: 12,
  },
  checkBoxAndTextView: {  
    flexDirection: "row",
    paddingLeft: '30%'
  },
  optionStyle: {
    flexDirection: "row",
    paddingLeft: '5%'
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textStyle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: textDarkGrey
  },
  radio: {
    width: 10,
    height: 10,
    borderRadius: 30,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: bgLightGrey 
  },
  innerRedio: {
    height: 10,
    width: 10,
    borderRadius: 30,
    backgroundColor: primaryButton,
  },
  innerRedio2: {
    height: 10,
    width: 10,
    borderRadius: 30,
    backgroundColor: bgLightGrey,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 16,
    color: "grey",
    fontWeight: "bold",
  },
  categoryTextSelected: {
    color: mainBlue,
    paddingBottom: 5,
    borderColor: mainBlue,
  },
  view: {
    padding: 24,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20.8,
  },
});
