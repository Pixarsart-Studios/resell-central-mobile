import { bgWhite, primaryButton, textDarkGrey, textLightGrey } from "@/Constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    heading: {
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 19.2,
      paddingLeft: 24,
      paddingTop: 24,
    },
    desc: {
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 20.8,
      color: textDarkGrey,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 8,
    },
    cancel: {
      fontWeight: "700",
      fontSize: 12,
      lineHeight: 14.62,
      color: primaryButton,
      paddingLeft: "44%",
      paddingTop: 16,
    },
    saveBtnView: {
      marginTop: 90,
    },
    itemView: {
      marginVertical: 8,
      width: "88%",
      borderRadius: 5,
      padding: 24,
      backgroundColor: bgWhite,
      marginLeft: 24,
      marginTop: 16,
      shadowColor: textLightGrey,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.7,
      elevation: 1,
      height: 73,
    },
    itemDataInnerView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 20.8,
    },
  });