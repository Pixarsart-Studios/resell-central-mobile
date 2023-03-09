import {
  SafeAreaView,
  Text,
  View,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import AuthContext from "@/Config/AuthContext";
import MainHeader from "@/Components/MainHeader/MainHeader";
import { bgLightGrey, mainBlue } from "@/Constants/Colors";
import Input from "@/Components/Input/Input";
import SelectDropdown from "react-native-select-dropdown";
import Button from "@/Components/Button/Button";
import RadioForm from "react-native-simple-radio-button";
import { styles } from "./styles";

const CreateEmailTemplate = () => {
  const [value, setValue] = useState(0);
  const { myState } = useContext(AuthContext);
  const { language } = myState;

  const languages = ["Flat 50% off", "French", "German", "Urdu"];

  var radio_props = [
    { label: "Seller                                    ", value: 0 },
    { label: "Customers", value: 1 },
  ];

  return (
    <SafeAreaView>
      <MainHeader
        back={language?.back}
        heading={language?.createEmailTemplate}
      />

      <Text style={styles.headingText}>{language?.emailTemplate}</Text>
      <View style={styles.radioView}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => setValue(value)}
          buttonColor={bgLightGrey}
          formHorizontal={true}
          buttonSize={8}
          selectedButtonColor={mainBlue}
        />
      </View>

      <View style={styles.singleInputView}>
        <View style={styles.remainingLabelsView}>
          <Text style={styles.remainingLabelsText}>{language?.title}</Text>
        </View>
        <Input style={styles.input} />
      </View>

      <View style={styles.dropDownView}>
        <Image
          style={{
            height: 15,
            width: 15,
            position: "absolute",
            left: "90%",
            top: "55%",
            zIndex: 1,
          }}
          source={require("../../Assets/Images/angleDown.png")}
          resizeMode="contain"
        />

        <View style={styles.labelContainer}>
          <Text style={styles.selectCategoryLable}>{language?.trigger}</Text>
        </View>
        <SelectDropdown
          defaultButtonText="."
          buttonStyle={styles.btn}
          data={languages}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>

      <View style={styles.emailAddressLabelContainer}>
        <Text style={styles.emailAddressLableText}>
          {language?.emailAddress}
        </Text>
      </View>
      <Text style={styles.domainInfoText}>{language?.resellCentralCom}</Text>
      <View style={styles.inputContainer}>
        <Input style={styles.input} />
        <View style={styles.lastNameLableView}>
          <Text style={styles.lastNameLabelText}>
            {language?.emailTemplate}
          </Text>
        </View>
        <Input style={styles.input} />
      </View>

      <View style={styles.singleInputView}>
        <View style={styles.remainingLabelsView}>
          <Text style={styles.remainingLabelsText}>{language?.tags}</Text>
        </View>
        <Input style={styles.input} />
      </View>

      <View style={styles.saveBtnView}>
        <Button title={language?.saveEmailTemplate} style={styles.saveBtn} />
      </View>
      <Text style={styles.cancel}>{language?.cancel}</Text>
    </SafeAreaView>
  );
};

export default CreateEmailTemplate;
