import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import Button from "@/Components/Button/Button";
import { mainBlue } from "@/Constants/Colors";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const ProductDetails = () => {
  const categories = ["Description", "Organization"];
  const [categoryIndex, setCategoryIndex] = useState(0);
  const organizationData = [
    {
      Type: "Type:                      Food",
      Collection: "Collection:             Vegitables",
      Vendor: "Vendor                   Food Mart",
      Brands: "Brands                   Loream Ipsum",
      Tags: "Tags                       Tags",
    },
  ];
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
        {categoryIndex == 0 ? (
          <View style={styles.view}>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </View>
        ) : (
          <View style={styles.view}>
            {organizationData.map((item, index) => {
              return (
                <View>
                  <Text style={{}}>{item.Type}</Text>
                  <Text style={{ paddingTop: 8 }}>{item.Collection}</Text>
                  <Text style={{ paddingTop: 8 }}>{item.Vendor}</Text>
                  <Text style={{ paddingTop: 8 }}>{item.Brands}</Text>
                  <Text style={{ paddingTop: 8 }}>{item.Tags}</Text>
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainHeader back={"BACK"} heading="Product Details" />
      <ScrollView>
        <Image
          onPress={() => props?.navigation?.goBack()}
          resizeMode="contain"
          source={require("../../Assets/Images/ProductImage.png")}
          style={styles.image}
        />
        <View>
          <Text style={{ paddingLeft: 24, paddingTop: 24 }}>Category</Text>
          <View style={styles.productTitleRowView}>
            <Text style={styles.textStyle}>Product Title</Text>
            <Text style={styles.textStyle}>$260.00</Text>
          </View>
          <Text style={[styles.textStyle, { paddingLeft: 24 }]}>Features</Text>
          <View
            style={{ flexDirection: "row", paddingLeft: 24, paddingTop: 8 }}
          >
            <Text style={styles.featuresText}>.</Text>
            <Text style={styles.featuresText}>Lorem Ipsum is simply dummy</Text>
          </View>
          <View
            style={{ flexDirection: "row", paddingLeft: 24, paddingTop: 8 }}
          >
            <Text style={styles.featuresText}>.</Text>
            <Text style={styles.featuresText}>Lorem Ipsum is simply dummy</Text>
          </View>
          <View
            style={{ flexDirection: "row", paddingLeft: 24, paddingTop: 8 }}
          >
            <Text style={styles.featuresText}>.</Text>
            <Text style={styles.featuresText}>Lorem Ipsum is simply dummy</Text>
          </View>
          <CategoryList />
          <Button title="EDIT PRODUCT DETAIL" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "30%",
    width: "100%",
  },
  productTitleRowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },
  categoryText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    paddingLeft: 24,
  },
  textStyle: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
  },
  featuresText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20.8,
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
});

export default ProductDetails;
