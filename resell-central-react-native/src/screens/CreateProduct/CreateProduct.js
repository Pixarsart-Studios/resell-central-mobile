import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import {
  bgLightGrey,
  mainBlue,
  textDarkGrey,
  textLightGrey,
} from "@/Constants/Colors";
import Button from "@/Components/Button/Button";
import { createProductData } from "../../../DummyData";
import AntDesign from "react-native-vector-icons/AntDesign";
import { styles } from "./styles";
import { TableView } from "./TableView";

const CreateProduct = () => {


  const [selected, isSelected] = useState(false);
  const products = [
    { name: "ebay", id: 1 },
    { name: "My Slab", id: 2, },
    { name: "Mercari", id: 3 },
    { name: "Grailed", id: 4 },
    { name: "Stocks", id: 5 },
    { name: "Alias", id: 6 },
    { name: "Poshmark", id: 7 },
    { name: "Depop", id: 8 },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <AntDesign
            name={'checksquareo'}
            size={25}
            color={mainBlue}
            style={{ marginHorizontal: 10 }}
          />
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <MainHeader back={"BACK"} heading={"Create Product"} />
      <ScrollView horizontal={true}>
        <View>
          <View style={styles.tableHeader}>
            <TableView
              width={50}
              justifyContent="center"
              alignItems="center"
              marginLeft={24}
            />
            <TableView width={65} justifyContent="center" alignItems="center" />
            <TableView
              label={"Category"}
              source={require("../../Assets/Images/angleDown.png")}
              width={140}
              justifyContent="space-evenly"
              alignItems="center"
            />
            <TableView
              label={"Q"}
              source={require("../../Assets/Images/angleDown.png")}
              width={80}
              justifyContent="space-evenly"
              alignItems="center"
            />
            <TableView
              label={"Year"}
              source={require("../../Assets/Images/angleDown.png")}
              width={80}
              justifyContent="space-evenly"
              alignItems="center"
            />
            <TableView
              label={"Product"}
              width={180}
              justifyContent="center"
              alignItems="center"
            />
            <TableView
              label={"Collection"}
              width={100}
              justifyContent="center"
              alignItems="center"
            />
            <TableView
              label={"Qty."}
              source={require("../../Assets/Images/angleDown.png")}
              width={80}
              justifyContent="space-evenly"
              alignItems="center"
            />
            <TableView
              label={"Description"}
              width={180}
              justifyContent="center"
              alignItems="center"
            />
            <TableView
              label={"Status"}
              source={require("../../Assets/Images/angleDown.png")}
              width={100}
              justifyContent="space-evenly"
              alignItems="center"
            />

            <TableView
              label={"Sale Price"}
              source={require("../../Assets/Images/angleDown.png")}
              width={130}
              justifyContent="space-evenly"
              alignItems="center"
            />

            <TableView
              label={"Discount"}
              source={require("../../Assets/Images/angleDown.png")}
              width={130}
              justifyContent="space-evenly"
              alignItems="center"
            />

            <TableView
              label={"RC"}
              width={50}
              justifyContent="center"
              alignItems="center"
            />
            <TableView
              label={"AUT"}
              width={50}
              justifyContent="center"
              alignItems="center"
            />
            <TableView
              label={"Serial No."}
              width={100}
              justifyContent="center"
              alignItems="center"
            />
            <TableView
              label={"Sub Title"}
              width={100}
              justifyContent="center"
              alignItems="center"
            />
          </View>
          {createProductData.map((data, i) => {
            return (
              <View key={i} style={{ flexDirection: "row" }}>
                <TableView
                  label={data.id}
                  width={50}
                  justifyContent="center"
                  alignItems="center"
                  marginLeft={24}
                />
                <View
                  style={{
                    height: 50,
                    width: 65,
                    borderLeftWidth: 1,
                    borderTopWidth: 1,
                    borderColor: textLightGrey,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 40, width: 20 }}
                    source={data.baseBallImage1}
                  />
                  <Image
                    style={{ height: 40, width: 20 }}
                    source={data.baseBallImage2}
                  />
                </View>
                <TableView
                  label={data.category}
                  width={140}
                  justifyContent="center"
                  alignItems="center"
                />
                <TableView
                  label={data.q}
                  width={80}
                  justifyContent="center"
                  alignItems="center"
                />
                <TableView
                  label={data.year}
                  width={80}
                  justifyContent="center"
                  alignItems="center"
                />
                <TableView
                  label={data.product}
                  width={180}
                  justifyContent="center"
                  alignItems="center"
                />
                <TableView width={100} />
                <TableView width={80} />
                <TableView width={180} paddingLeft={10} />
                <TableView
                  label={data.status}
                  width={100}
                  justifyContent="center"
                  alignItems="center"
                />
                <TableView
                  label={data.salePrice}
                  width={130}
                  justifyContent="center"
                  alignItems="center"
                />
                <TableView
                  label={data.discount}
                  width={130}
                  justifyContent="center"
                  alignItems={"center"}
                />
                <TableView
                  width={50}
                  justifyContent="center"
                  alignItems="center"
                />
                <TableView
                  width={50}
                  justifyContent="center"
                  alignItems="center"
                />
                <TableView
                  width={100}
                  justifyContent="center"
                  alignItems="center"
                />
                <TableView
                  width={100}
                  justifyContent="center"
                  alignItems="center"
                />
              </View>
            );
          })}
          <View
            style={{
              borderWidth: 0.1,
              backgroundColor: textLightGrey,
              marginLeft: 24,
            }}
          ></View>
        </View>
      </ScrollView>

      <View>
        <Text style={styles.headingText}>
            Select Platforms to List Items
        </Text>
        <View style={{ flexDirection: "row", paddingTop: 24,  }}>
          <FlatList
            key={2}
            numColumns={2}
            data={products}
            renderItem={({ item, i }) => <Item 
            checkBox={item.checkBox}
            title={item.name}
             />
        }
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.btnView}>
      <Button title={"LIST YOUR ITEMS"} />
      </View>
    </SafeAreaView>
  );
};

export default CreateProduct;
