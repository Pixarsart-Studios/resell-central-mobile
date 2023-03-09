import { bgWhite, mainBlue, textDarkGrey, textLightGrey, textSuccess, textValidation } from "@/Constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor:bgWhite,
        height: '100%'
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
  idText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    paddingTop: 4,
    color: textDarkGrey
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
})