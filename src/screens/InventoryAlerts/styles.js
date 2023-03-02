import { StyleSheet } from "react-native";
import { bgWhite, mainBlue, textLightGrey } from "@/Constants/Colors";

export const styles = StyleSheet.create({
  headingView: {
    flexDirection: "row",
    padding: 24,
    justifyContent: "space-between",
  },
  heading: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19.2,
  },
  blueText: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14.62,
    color: mainBlue,
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
    height: 35,
    width: 35,
    borderRadius: 5,
  },
  itemLeftView: {
    flexDirection: "column",
    paddingLeft: 8,
  },
  itemRightView: {
    position: "absolute",
    justifyContent: "flex-end",
    top: 0,
    left: 255,
  },
  itemName: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
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
});
