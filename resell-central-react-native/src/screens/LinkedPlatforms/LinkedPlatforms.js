import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import AuthContext from "@/Config/AuthContext";
import { Image } from "react-native";
// import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { linkedPlatformsData } from "../../../DummyData";
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

const LinkedPlatforms = () => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [connect, setConnect] = useState(false);

  const Item = ({ title, image, detail }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemView}>
        <Image style={styles.logo} source={image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.detail}>{detail}</Text>
          <TouchableOpacity
            style={
              connect == false ? styles.connectButton : styles.connectedButton
            }
            onPress={() => setConnect(true)}
          >
            <Text style={connect ? styles.connectedText : styles.connectText}>
              {connect == false ? language?.connect : language?.connected}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <MainHeader back={language?.back} heading={language?.linkedPlatforms} />
      <View>
        <FlatList
          key={2}
          data={linkedPlatformsData}
          renderItem={({ item, i }) => (
            <Item
              keyExtractor={(item) => item.id}
              title={item.name}
              image={item.image}
              detail={item.detail}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default LinkedPlatforms;

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
