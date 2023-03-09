import { bgBlack, bgLightGrey, bgWhite, primaryButton, strokeGray, strokeWhite, textDarkGrey } from "@/Constants/Colors";
import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    headingText: {
     fontSize: 16,
     lineHeight: 19.2,
     color: bgBlack,
     fontWeight: '700',
     paddingLeft: 24,
     paddingTop: 24    
 },
 singleInputView: {
     height: heightPercentageToDP("9%"),
     paddingLeft: 24,
     paddingRight: 24,
   },
   remainingLabelsView: {
     backgroundColor: strokeWhite,
     alignSelf: "flex-start",
     marginStart: "3%",
     zIndex: 1,
     elevation: 1,
     shadowColor: bgWhite,
     top: "10%",
   },
   remainingLabelsText: {
     fontWeight: "400",
     fontSize: 14,
     lineHeight: 18.2,
     color: textDarkGrey,
   },
   input: {
     borderWidth: 1,
     borderRadius: 5,
     borderColor: strokeGray,
     height: '100%'
 
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
     width: 50,
     justifyContent: "center",
     alignItems: "center",
   },
   selectCategoryLable: {
     fontWeight: "400",
     fontSize: 14,
     lineHeight: 18.2,
     color: textDarkGrey,
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
   inputContainer: {
     height: heightPercentageToDP("17%"),
     paddingLeft: 24,
     paddingRight: 24,
   },
   firstNameLabel: {
     fontWeight: "400",
     fontSize: 14,
     lineHeight: 18.2,
     color: textDarkGrey,
     width: 200,
   },
   lastNameLableView: {
     backgroundColor: strokeWhite,
     alignSelf: "flex-start",
     marginStart: "3%",
     zIndex: 1,
     elevation: 1,
     shadowColor: bgWhite,
     top: "10%",
   },
   lastNameLabelText: {
     fontWeight: "400",
     fontSize: 14,
     lineHeight: 18.2,
     color: textDarkGrey,
   },
   emailAddressLableText: {
     fontWeight: "400",
     fontSize: 14,
     lineHeight: 18.2,
     color: textDarkGrey,
     width: 150,
   },
   emailAddressLabelContainer: {
     backgroundColor: strokeWhite,
     marginStart: "20.7%",
     zIndex: 1,
     elevation: 1,
     shadowColor: bgWhite,
     top: "1.8%",
     width: 50,
     justifyContent: "center",
     alignItems: "center",
   },
   domainInfoText: {
     position: 'absolute',
     top: '59%',
     right: '13%',
     color: textDarkGrey
   },
   checkBoxContainer: {
     flexDirection: "row",
     paddingTop: 16
   },
   checkBoxView: {
     flexDirection: "row",
     marginVertical: 10,
     paddingLeft: 24,
   },
   checkBox: {
     width: 18,
     height: 18,
     borderWidth: 1,
     borderColor: textDarkGrey,
     borderRadius: 13,
     justifyContent: "center",
     alignItems: "center",
   },
   selectedCheckBox: {
     width: 14,
     height: 14,
     borderWidth: 1,
     borderColor: primaryButton,
     backgroundColor: primaryButton,
     borderRadius: 13,
   },
   option: {
     paddingLeft: 24,
   },
   radioView: {
     paddingTop: 30, 
     paddingLeft: 24
 }
 })