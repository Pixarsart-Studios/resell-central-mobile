import { bgWhite, bgLightGrey, primaryButton } from "@/Constants/Colors";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  btn: {
    backgroundColor: bgWhite,
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderColor: bgLightGrey,
    borderRadius: 5,
    flexDirection: "row",
  },
  dropdown: {
    width: "60%",
    marginLeft: wp(16),
  },
  arrow: {
    height: 10,
    width: 10,
    position: "absolute",
    right: "4%",
    top: "40%",
    // tintColor: focused ? "red" : "green",
  },
});
