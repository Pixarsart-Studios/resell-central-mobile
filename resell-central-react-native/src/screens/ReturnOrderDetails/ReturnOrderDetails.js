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
  import { TouchableOpacity } from "react-native-gesture-handler";
  
  const ReturnOrderDetails = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <MainHeader back={"BACK"} heading="Order Details" />
        <Image
          resizeMode="contain"
          source={require("../../Assets/Images/ProductImage.png")}
          style={styles.image}
        />
        <View>
          <Text style={{ paddingLeft: 24, paddingTop: 24 }}>#6626531546</Text>
          <View style={styles.productTitleRowView}>
            <Text style={styles.textStyle}>Product Title</Text>
            <Text style={styles.textStyle}>$542.25</Text>
          </View>
          <Text style={{ paddingLeft: 24, paddingBottom: 24 }}>Ordered on: Jan 23, 2023</Text>
          <Text style={[styles.contactInfo, { paddingLeft: 24 }]}>Contact Info.</Text>
          <View style={{ flexDirection: "row", paddingLeft: 24, paddingTop: 17.5 }}>
           <Image
           resizeMode="contain"
           style={styles.icon} source={require('../../Assets/Images/phoneIcon.png')} />
            <Text style={styles.featuresText}>(704) 555-0127</Text>
          </View>
          <View style={{ flexDirection: "row", paddingLeft: 24, paddingTop: 17.5 }}>
          <Image
           resizeMode="contain"
           style={styles.icon} source={require('../../Assets/Images/gmailLogo.png')} />
            <Text style={styles.featuresText}>lorem@gmail.com</Text>
          </View>
          <Text style={[styles.contactInfo, { paddingLeft: 24, paddingTop: 24 }]}>Shipping Info.</Text>
          <View style={{ flexDirection: "row", paddingLeft: 24, paddingTop: 17.5 }}>
           <Image
           resizeMode="contain"
           style={styles.icon} source={require('../../Assets/Images/locationIcon.png')} />
            <Text style={styles.featuresText}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
          </View>
          <Button title="EDIT PRODUCT DETAIL" />
        </View>
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
      paddingLeft: 8,
      paddingRight:24
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
    contactInfo: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 19.2
    },
    icon: {
        height: 21,
        width: 21,
    }
  });
  
  export default ReturnOrderDetails;
  