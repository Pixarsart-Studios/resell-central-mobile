import { bgLightGrey, strokeGray, textDarkGrey } from "@/Constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listView: {
      flexDirection: "row",
    },
    settingsView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 24,
        paddingRight: 24,
        height: 37,
        backgroundColor: 'rgba(230, 230, 230, 0.16)'
      },
    image: {
      height: 6,
      width: 6,
    },
    line: { 
        height: 1, 
        width: "100%", 
        backgroundColor: bgLightGrey
     },
     heading: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 19.2,
        padding: 24
     },
     name: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20.8
     }
  });