import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import SearchBar from "@/Components/Searchbar";
import { DummyData } from "../../../DummyData";
import Button from "@/Components/Button/Button";
import Input from "@/Components/Input/Input";
import { styles } from "./styles";

const Inventory = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <MainHeader
        onPress={() => props?.navigation?.goBack()}
        back={"BACK"}
        heading="European Base Ball"
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
        <Text>Juiced</Text>
        <View style={styles.checkBoxAndTextView}>
          <View style={styles.optionStyle}>
            <TouchableOpacity style={[styles.radio]}>
              <View style={styles.innerRedio} />
            </TouchableOpacity>
            <Text style={[styles.textStyle, { marginLeft: 20 }]}>
              Select All
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        {DummyData.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("ProductDetails");
              }}
              style={styles.item}
            >
              <View style={styles.itemView}>
                <Image
                  style={styles.image}
                  source={require("../../Assets/Images/listImage.png")}
                />
                <View style={styles.itemLeftView}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.detailText}>{item.detail}</Text>
                  <Text style={styles.detailText}>{item.vendor}</Text>
                  <Text style={styles.detailText}>{item.type}</Text>
                </View>
                <View style={styles.itemRightView}>
                  <Text style={styles.price}>${item.price}</Text>
                  <View
                    style={
                      item.status == "Active"
                        ? styles.activeStatus
                        : item.status == "Low in Stock"
                        ? styles.lowInStock
                        : item.status == "Out of Stock"
                        ? styles.outOfStock
                        : null
                    }
                  >
                    <Text
                      style={
                        item.status == "Active"
                          ? styles.activeStatusText
                          : item.status == "Low in Stock"
                          ? styles.lowInStockText
                          : item.status == "Out of Stock"
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
        <View style={styles.secondRowView}>
          <Text>Cola's</Text>
          <View style={styles.checkBoxAndTextView}>
            <View style={styles.optionStyle}>
              <TouchableOpacity style={[styles.radio]}>
                <View style={styles.innerRedio} />
              </TouchableOpacity>
              <Text style={[styles.textStyle, { marginLeft: 20 }]}>
                Select All
              </Text>
            </View>
          </View>
        </View>
        {DummyData.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("ProductDetails");
              }}
              style={styles.item}
            >
              <View style={styles.itemView}>
                <Image
                  style={styles.image}
                  source={require("../../Assets/Images/listImage.png")}
                />
                <View style={styles.itemLeftView}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.detailText}>{item.detail}</Text>
                  <Text style={styles.detailText}>{item.vendor}</Text>
                  <Text style={styles.detailText}>{item.type}</Text>
                </View>
                <View style={styles.itemRightView}>
                  <Text style={styles.price}>${item.price}</Text>
                  <View
                    style={
                      item.status == "Active"
                        ? styles.activeStatus
                        : item.status == "Low in Stock"
                        ? styles.lowInStock
                        : item.status == "Out of Stock"
                        ? styles.outOfStock
                        : null
                    }
                  >
                    <Text
                      style={
                        item.status == "Active"
                          ? styles.activeStatusText
                          : item.status == "Low in Stock"
                          ? styles.lowInStockText
                          : item.status == "Out of Stock"
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
      </ScrollView>
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
      <TouchableOpacity style={styles.floatingButtonView}>
        <Image
          style={styles.floatingButton}
          source={require("../../Assets/Images/floatingButtonImage.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Inventory;
