import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import SearchBar from "@/Components/Searchbar";
import { DummyData, ManageOrdersData } from "../../../DummyData";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  bgBlack,
  bgLightGrey,
  bgWhite,
  mainBlue,
  strokeGray,
  strokeWhite,
  textDarkGrey,
  textError,
  textLightGrey,
  textSuccess,
  textValidation,
} from "@/Constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { proximaNovaAltBold, proximaNovaRegular } from "@/Constants/Fonts";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";

const InventoryAlerts = (props) => {
  const categories = ["All", "Shipped", "Pending", "Canceled"];
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <MainHeader
        onPress={() => props?.navigation?.goBack()}
        back={"BACK"}
        heading="Manage Orders"
      />
      <View style={styles.inputView}>
        <SearchBar />
        <View style={styles.filteringIconView}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={styles.filteringIconImage}
              resizeMode="contain"
              source={require("../../Assets/Images/system-uicons_filtering.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondRowView}>
        <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <View>
              <TouchableOpacity
                key={index}
                onPress={() => setCategoryIndex(index)}
                style={{ paddingLeft: 24 }}
              >
                <View
                  style={categoryIndex == index && styles.categoryTextSelected}
                >
                  <Text
                    key={index}
                    style={[
                      styles.categoryText,
                      categoryIndex == index && styles.categoryTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {ManageOrdersData.map((item, index) => {
        return (
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemView}>
              <Image
                style={styles.image}
                source={require("../../Assets/Images/listImage.png")}
              />
              <View style={styles.itemLeftView}>
                <Text style={styles.detail}>{item.id}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.detailText}>{item.detail}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.detailText}>{item.type}</Text>
              </View>
              <View style={styles.itemRightView}>
                <Text>{item.quantity}</Text>
                <View
                  style={
                    item.status == "Shipped"
                      ? styles.activeStatus
                      : item.status == "Pending"
                      ? styles.lowInStock
                      : item.status == "Pending"
                      ? styles.outOfStock
                      : null
                  }
                >
                  <Text
                    style={
                      item.status == "Shipped"
                        ? styles.activeStatusText
                        : item.status == "Pending"
                        ? styles.lowInStockText
                        : item.status == "Pending"
                        ? styles.outOfStockText
                        : null
                    }
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
      <View>
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
              <View style={styles.line} />
              <View style={styles.heading}>
                <Text style={styles.headingText}>Filters</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.emailLabel}>Search by Status</Text>
              </View>
              <View style={styles.inputContainer}>
                <Input style={styles.input} />
                <View style={styles.passwordLabel}>
                  <Text style={styles.passwordLabelText}>
                    Search by Platform
                  </Text>
                </View>
                <Input style={styles.input} />
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.emailLabel}>Search by Category</Text>
              </View>
              <View style={styles.inputContainer}>
                <Input style={styles.input} />
                <Button
                  title={"SEARCH PRODUCTS"}
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerImageStyle: {
    height: 13,
    width: 20,
  },
  inputView: {
    flexDirection: "row",
    paddingRight: 39,
  },
  filteringIconView: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 5,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
  },
  filteringIconImage: {
    height: 60,
    width: 30,
  },
  secondRowView: {},
  checkBoxAndTextView: { justifyContent: "flex-start", flexDirection: "row" },
  selectAllText: { padding: 6 },
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
  activeStatusText: {
    color: textSuccess,
  },
  activeStatus: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginTop: 26,
    height: 25,
    borderRadius: 5,
    backgroundColor: "rgba(64, 191, 127, 0.1)",
  },

  lowInStock: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginTop: 26,
    height: 30,
    width: 100,
    borderRadius: 5,
    backgroundColor: "rgba(255, 186, 51, 0.1)",
  },
  lowInStockText: {
    color: textValidation,
  },
  outOfStock: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginTop: 26,
    height: 30,
    width: 100,
    borderRadius: 5,
    backgroundColor: "rgba(255, 51, 51, 0.1)",
  },
  outOfStockText: {
    color: textError,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 3,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: bgLightGrey,
  },
  innerRedio: {
    height: 22,
    width: 22,
    borderRadius: 3,
    backgroundColor: bgLightGrey,
  },
  optionStyle: {
    width: wp(85),
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textStyle: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 16,
    color: "grey",
    fontWeight: "bold",
  },
  categoryTextSelected: {
    color: mainBlue,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: mainBlue,
  },
  view: {
    padding: 24,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20.8,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 15,
    // alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // width: ,
    height: "70%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: 'center',
  },
  centeredView: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
    // height: '80%',
    justifyContent: "flex-end",
  },
  heading: {
    paddingLeft: 24,
    paddingTop: 24,
  },
  headingText: {
    fontSize: 24,
    lineHeight: 28.8,
    color: bgBlack,
    // fontFamily: proximaNovaAltBold,
  },
  descContainer: {
    paddingLeft: 24,
    paddingTop: 8,
  },
  descText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20.8,
    // fontFamily: proximaNovaRegular,
    color: textDarkGrey,
  },
  labelContainer: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: 38,
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "1.5%",
  },
  emailLabel: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
    height: 50,
  },
  passwordLabel: {
    backgroundColor: strokeWhite,
    alignSelf: "flex-start",
    marginStart: 15,
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "8.5%",
  },
  passwordLabelText: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  inputContainer: {
    height: hp("17%"),
    paddingLeft: 24,
    paddingRight: 24,
  },
  line: {
    height: 3,
    width: "35%",
    backgroundColor: bgLightGrey,
    marginLeft: "30%",
  },
});

export default InventoryAlerts;
