import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import AuthContext from "@/Config/AuthContext";
import {
  bgLightGrey,
  bgWhite,
  primaryButton,
  strokeGray,
  strokeWhite,
  textBlack,
  textDarkGrey,
} from "@/Constants/Colors";
import Input from "@/Components/Input/Input";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "@/Components/Button/Button";

const AddStaff = () => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [checkBoxes, setCheckBoxes] = useState([]);
  const [checkBoxes2, setCheckBoxes2] = useState([]);

  const options = [
    language?.home,
    language?.orders,
    language?.editOrders,
    language?.draftOrders,
    language?.products,
    language?.giftCards,
    language?.customers,
    language?.reports,
  ];

  function pickCheckbox(selectedCheckBox) {
    if (checkBoxes.includes(selectedCheckBox)) {
      setCheckBoxes(
        checkBoxes.filter((checkBox) => checkBox !== selectedCheckBox)
      );
      return;
    }

    setCheckBoxes((checkBoxes) => checkBoxes.concat(selectedCheckBox));
  }

  function pickCheckbox2(selectedCheckBox2) {
    if (checkBoxes2.includes(selectedCheckBox2)) {
      setCheckBoxes2(
        checkBoxes2.filter((checkBox2) => checkBox2 !== selectedCheckBox2)
      );
      return;
    }

    setCheckBoxes2((checkBoxes2) => checkBoxes2.concat(selectedCheckBox2));
  }

  return (
    <SafeAreaView>
      <MainHeader back={language?.back} heading={language?.userManagement} />
      <ScrollView>
        <Text style={styles.heading}>{language?.addStaff}</Text>
        <View style={styles.labelContainer}>
          <Text style={styles.firstNameLabel}>{language?.firstName}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.input} />
          <View style={styles.lastNameLableView}>
            <Text style={styles.lastNameLabelText}>{language?.lastName}</Text>
          </View>
          <Input style={styles.input} />
        </View>

        <View style={styles.singleInputView}>
          <View style={styles.remainingLabelsView}>
            <Text style={styles.remainingLabelsText}>{language?.email}</Text>
          </View>
          <Input style={styles.input} />
        </View>

        <Text style={styles.heading}>{language?.permissions}</Text>
        <Text style={styles.permissionsMessageText}>
          {
            language?.loremIpsumDolorSitAmetConsecteturElementumAtConsecteturNunc
          }
        </Text>
        <View style={styles.checkBoxMainView}>
          <View>
            <Text
              style={[styles.dummyText, { paddingLeft: 24, paddingTop: 24 }]}
            >
              Dummy
            </Text>

            {options.map((option, i) => (
              <View
                key={option}
                style={
                  option == "Edit Orders"
                    ? styles.editOrdersCheckBoxView
                    : styles.checkBoxView
                }
              >
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={() => pickCheckbox(option)}
                >
                  {checkBoxes.includes(option) && (
                    <Text style={styles.check}>✓</Text>
                  )}
                </TouchableOpacity>
                <Text style={styles.option}>{option}</Text>
              </View>
            ))}
          </View>
          <View>
            <Text
              style={[styles.dummyText, { paddingLeft: 24, paddingTop: 24 }]}
            >
              Dummy
            </Text>

            {options.map((option2) => (
              <View
                key={option2}
                style={
                  option2 == "Edit Orders"
                    ? styles.editOrdersCheckBoxView
                    : styles.checkBoxView
                }
              >
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={() => pickCheckbox2(option2)}
                >
                  {checkBoxes2.includes(option2) && (
                    <Text style={styles.check}>✓</Text>
                  )}
                </TouchableOpacity>
                <Text style={styles.option}>{option2}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.saveBtnView}>
          <Button title={language?.SAVE} style={styles.saveBtn} />
        </View>
        <Text style={styles.cancel}>{language?.cancel}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddStaff;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19.2,
    color: textBlack,
    paddingTop: 24,
    paddingLeft: 24,
  },
  labelContainer: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: "8.2%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "1%",
    paddingTop: 19,
  },
  firstNameLabel: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  lastNameLableView: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: "3%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "6%",
  },
  lastNameLabelText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  inputContainer: {
    height: heightPercentageToDP("17%"),
    paddingLeft: 24,
    paddingRight: 24,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
    flex: 1,
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
  permissionsMessageText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
    paddingLeft: 24,
    paddingTop: 8,
  },
  checkBoxView: {
    flexDirection: "row",
    marginVertical: 10,
    paddingLeft: 24,
  },
  editOrdersCheckBoxView: {
    flexDirection: "row",
    marginVertical: 10,
    paddingLeft: 48,
  },
  checkBox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: primaryButton,
    backgroundColor: primaryButton,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  checkBoxMainView: {
    flexDirection: "row",
  },
  dummyText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16.8,
    color: textBlack,
  },
  check: {
    color: "white",
  },
  option: {
    paddingLeft: 24,
  },
  saveBtnView: {
    marginTop: 24,
  },
  cancel: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14.62,
    color: primaryButton,
    paddingLeft: "44%",
    paddingTop: 16,
  },
});
