import { bgWhite, buttonColor, primaryButton } from "@/Constants/Colors";
import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    buttonContainer: {
     paddingLeft: 24,
    //  paddingTop: 24
  paddingTop: 10,

    },
     button: {
     width: '93%',
     height: 51,
     borderRadius: 5,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: primaryButton
 
   },
   title: {
     color: bgWhite,
     fontWeight: '600',
     fontSize: 16,
     lineHeight: 19.49
   }
 })
 