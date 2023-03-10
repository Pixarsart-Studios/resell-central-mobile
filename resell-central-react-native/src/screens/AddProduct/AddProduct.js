import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { useContext, useState } from "react";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import { styles } from "./styles";
import MainHeader from "@/Components/MainHeader/MainHeader";
import DropDown from "../../Components/DropDown/Dropdown";
import AuthContext from "@/Config/AuthContext";
import { widthPercentageToDP } from "react-native-responsive-screen";

const category = ["shirt", "pent"];

const AddProduct = ({ navigation }) => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#FFFFFF"} />
      <View style={styles.childContainer}>
        <MainHeader
          onPress={() => navigation?.goBack()}
          back={language?.back}
          heading={language?.addAProduct}
        />
        <View style={styles.heading}>
          <Text style={styles.headingText}>
            {language?.selectProductCategory}
          </Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.selectCategoryLable}>
            {language?.selectCategory}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          {/* <Input style={styles.input} /> */}
          <DropDown array={category} />
          <View style={styles.selectConditoinsLableView}>
            <Text style={styles.selectConditoinsLabelText}>
              {language?.selectContion}
            </Text>
          </View>
          <Input style={styles.input} />
          <Image
            style={{
              height: 10,
              width: 10,
              position: "absolute",
              right: "12%",
              top: "56%",
            }}
            source={require("../../Assets/Images/angleDown.png")}
            resizeMode="contain"
          />
          <View style={styles.selectConditoinsLableView}>
            <Text style={styles.selectConditoinsLabelText}>
              {language?.selectYear}
            </Text>
          </View>
          <Input style={styles.input} />
          <Image
            style={{
              height: 10,
              width: 10,
              position: "absolute",
              right: "12%",
              top: "93%",
            }}
            source={require("../../Assets/Images/angleDown.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title={language?.uploadImages}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalLine} />
            <View style={styles.modalHeading}>
              <Text style={styles.headingTextModal}>
                {language?.selectMediaOption}
              </Text>
            </View>
            <View style={styles.modalImagesView}>
              <Image
                style={styles.uploadImage}
                source={require("../../Assets/Images/scanProductImage.png")}
              />
              <Image
                style={styles.uploadImage}
                source={require("../../Assets/Images/fromGalaryImage.png")}
              />
            </View>
            <Button
              title={language?.CONTINUE}
              onPress={() => setModalVisible(false)}
            />
            <Text style={styles.cancleModal}>CANCEL</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default AddProduct;
