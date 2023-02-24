import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import {
  InventoryAlertsTodayData,
  InventoryAlertsYesterayData,
} from "../../../DummyData";
import { styles } from "./styles";

const InventoryAlerts = () => {
  return (
    <SafeAreaView>
      <MainHeader
        heading={"Resell Central Seller"}
        icon={
          <Image
            style={{ height: 13, width: 20 }}
            resizeMode="center"
            source={require("../../Assets/Images/Hamburger.png")}
          />
        }
      />
      <View style={styles.headingView}>
        <Text style={styles.heading}>Today's</Text>
        <Text style={styles.blueText}>MARK ALL AS READ</Text>
      </View>
      {InventoryAlertsTodayData.map((item, index) => {
        return (
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemView}>
              <Image
                style={styles.image}
                source={require("../../Assets/Images/RedDotImage.png")}
              />
              <View style={styles.itemLeftView}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.detailText}>{item.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
      <View style={styles.headingView}>
        <Text style={styles.heading}>Yesterday</Text>
      </View>
      {InventoryAlertsYesterayData.map((item, index) => {
        return (
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemView}>
              <Image
                style={styles.image}
                source={require("../../Assets/Images/BlackDotImage.png")}
              />
              <View style={styles.itemLeftView}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.detailText}>{item.date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default InventoryAlerts;
