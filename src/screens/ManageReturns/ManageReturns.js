import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
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

const ManageReturns = () => {
  const categories = ["All", "Resolved", "Unresolved"];
  const [categoryIndex, setCategoryIndex] = useState(0);

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
        icon={
          <Image
            style={styles.headerImageStyle}
            resizeMode="center"
            source={require("../../Assets/Images/Hamburger.png")}
          />
        }
        heading="Manage Returns"
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
      <CategoryList />

      {ManageReturnsData.map((item, index) => {
        return (
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemView}>
              <Image
                style={styles.image}
                source={require("../../Assets/Images/listImage.png")}
              />
              <View style={styles.itemLeftView}>
                <Text style={styles.detailText}>{item.code}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.detailText}>{item.detail}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
              <View style={styles.itemRightView}>
                <Text style={styles.detailText}>{item.quantity}</Text>
                <View
                  style={
                    item.status == "Resolved"
                      ? styles.resolved
                      : item.status == "Resolved"
                      ? styles.resolved
                      : item.status == "Unresolved"
                      ? styles.unResolved
                      : null
                  }
                >
                  <Text
                    style={
                      item.status == "Resolved"
                        ? styles.resolvedText
                        : item.status == "Resolved"
                        ? styles.unResolved
                        : item.status == "Unresolved"
                        ? styles.unResolvedText
                        : null
                    }
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.cardText}>{item.loreamIpsum}</Text>
            </View>
            <View style={styles.imgRowView}>
              <Image style={styles.productImage} source={item.blueShowsImage} />
              <Image
                style={styles.productImage}
                source={item.greenShowsImage}
              />
              <Image style={styles.productImage} source={item.greyShowsImage} />
            <ImageBackground style={[styles.productImage, {justifyContent: 'center', alignItems: 'center'}]} source={item.moreImageBackground}>
            <Image
            resizeMode="contain" style={styles.imageCount} source={item.threePlusImage} />
            <Image resizeMode="contain" style={styles.imageCount} source={item.moreImage} />
            </ImageBackground>
            </View>
          </TouchableOpacity>
        );
      })}
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
  cardText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: textDarkGrey,
    padding: 5
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
  }
});

export default ManageReturns;
