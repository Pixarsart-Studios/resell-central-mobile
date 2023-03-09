import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState, useContext } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import SearchBar from "@/Components/Searchbar";
import {
  bgLightGrey,
  bgWhite,
  mainBlue,
  textDarkGrey,
  textError,
  textLightGrey,
  textSuccess,
  textValidation,
} from "@/Constants/Colors";
import { DummyData, ManageReturnsData } from "../../../DummyData";
import AuthContext from "@/Config/AuthContext";
import PagerView from 'react-native-pager-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Inventory from "../Inventory/Inventory";
import ManageReturns from "../ManageReturns/ManageReturns";
import TopTabs from "@/Navigators/TopTabs";


const Tab = createMaterialTopTabNavigator();

const ManageOrders = (props) => {
  const categories = ["All", "Resolved", "Unresolved"];
  const [categoryIndex, setCategoryIndex] = useState(0);
  const { myState } = useContext(AuthContext);
  const { language } = myState;

  const CategoryList = () => {

    return (
      <View>
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
    );
  };

  return (
    <SafeAreaView>
      <MainHeader
        props={props}
        icon={
          <Image
            style={styles.headerImageStyle}
            resizeMode="center"
            source={require("../../Assets/Images/Hamburger.png")}
          />
        }
        heading={language?.manageOrders}
      />
      <View style={styles.inputView}>
        <SearchBar />
        <View style={styles.filteringIconView}>
          <Image
            style={styles.filteringIconImage}
            resizeMode="contain"
            source={require("../../Assets/Images/system-uicons_filtering.png")}
          />
        </View>
      </View>
      <View style={{height: '100%',width: '100%', paddingTop: 24}}>
    <TopTabs />
      </View>
      {/* <CategoryList /> */}

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
    paddingRight: 28,
  },
  filteringIconView: {
    backgroundColor: "white",
    height: 45,
    width: 45,
    borderRadius: 5,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: bgLightGrey,
  },
  filteringIconImage: {
    height: 60,
    width: 25,
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
  
  
  cardText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: textDarkGrey,
    padding: 5,
  },
  imgRowView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  productImage: {
    height: 80,
    width: 80,
  },
  moreImgView: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 5,
  },
  imageCount: {
    height: 30,
    width: 30,
  },
 
});

export default ManageOrders;
