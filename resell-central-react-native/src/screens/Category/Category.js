import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import SearchBar from "@/Components/Searchbar";
import CheckBox from "@react-native-community/checkbox";
import { mainBlue } from "@/Constants/Colors";

const Category = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView>
      <MainHeader
        icon={
          <Image
            style={styles.headerImageStyle}
            resizeMode="center"
            source={require("../../Assets/Images/Hamburger.png")}
          />
        }
        heading="Categories"
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
      <View style={styles.secondRowView}>
        <View style={styles.checkBoxAndTextView}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={styles.selectAllText}>Select All</Text>
        </View>
        <View style={styles.importExportView}>
          <Text style={styles.importText}>IMPORT</Text>
          <Text style={styles.exportView}>EXPORT</Text>
        </View>
      </View>
      <View style={styles.categoriesAndProductTextView}>
        <Text>Categories</Text>
        <Text>Products</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.categoryItemView}>
        <View style={styles.categoryLeftView}>
          <View style={styles.categoryCheckBoxView}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
          </View>
          <View style={styles.sixDotsImageView}>
            <Image
              style={styles.sixDotsImage}
              resizeMode="contain"
              source={require("../../Assets/Images/blueDots.png")}
            />
          </View>

          <Text style={styles.categoryNameText}>Base Ball</Text>
        </View>
        <View style={styles.productsColumView}>
          <Text>113</Text>
          <Image
            style={styles.productOptionImage}
            resizeMode="contain"
            source={require("../../Assets/Images/threeDots.png")}
          />
        </View>
      </View>
      <View
        style={{
          height: 0.5,
          width: "88%",
          backgroundColor: "#212121",
          marginLeft: 24,
          marginTop: 8,
        }}
      />
      <View style={styles.floatingButtonView}>
        <Image 
        style={styles.floatingButton}
        source={require('../../Assets/Images/floatingButtonImage.png')}/>
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
    paddingRight: 28,
  },
  filteringIconView: {
    backgroundColor: "white",
    height: 50,
    width: 50,
    borderRadius: 5,
    marginTop: 12,
    // marginRight: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  filteringIconImage: {
    height: 60,
    width: 25,
  },
  secondRowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },
  checkBoxAndTextView: { justifyContent: "flex-start", flexDirection: "row" },
  selectAllText: { padding: 6 },
  importExportView: { flexDirection: "row", justifyContent: "space-evenly" },
  importText: {
    paddingRight: 23,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19.49,
    color: mainBlue,
  },
  exportView: { paddingRight: 23, fontSize: 16, lineHeight: 19.49 },
  categoriesAndProductTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
  },
  line: {
    height: 0.2,
    width: "88%",
    backgroundColor: "#212121",
    marginLeft: 24,
    marginTop: 8,
  },
  categoryItemView: { flexDirection: "row", justifyContent: "space-between" },
  categoryLeftView: { flexDirection: "row", paddingLeft: 24 },
  categoryCheckBoxView: { paddingTop: 5 },
  sixDotsImageView: { paddingTop: 10 },
  sixDotsImage: { height: 20, width: 25 },
  categoryNameText: { paddingTop: 10, paddingLeft: 3 },
  productsColumView: { flexDirection: "row", paddingRight: 14, paddingTop: 13 },
  productOptionImage: { height: 20, width: 25 },
  floatingButtonView: {
    paddingTop: 485,
    paddingLeft: 345
  },
  floatingButton: {
    height: 45,
    width: 45
  }
});

export default Category;
