import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {} from "react-native-gesture-handler";
import MainHeader from "@/Components/MainHeader/MainHeader";
import { styles } from "../SignInScreen/styles";

const arr = [
  {
    title: "General Information",
    route: "Linked",
  },
  {
    title: "Linked Platforms",
    route: "Linked",
  },
  {
    title: "Subscription Plans",
    route: "SubscriptionPlan",
  },
  {
    title: "User Management",
    route: "UserManagement",
  },
  {
    title: "Tax",
    route: "Tax",
  },
  {
    title: "Shipping Method",
    route: "Shipping",
  },
  {
    title: "Notifications",
    route: "Notifications",
  },
  {
    title: "Store Languages",
    route: "StoreLanguage",
  },
  {
    title: "Email",
    route: "EmailScreen",
  },
];

const Settings = (props) => {
  const BtnComp = ({ name, route }) => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate(route)}
        style={{
          borderWidth: 1,
          borderColor: "#E6E6E6",
          paddingHorizontal: 15,
          paddingVertical: 8,
          width: "100%",
          backgroundColor: "rgba(230, 230, 230, 0.16)",
        }}
      >
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <MainHeader
        props={props}
        icon={
          <Image
            style={styles.headerImageStyle}
            resizeMode="center"
            source={require("../../Assets/Images/Hamburger.png")}
          />
        }
        heading="Settings"
      />
      <ScrollView>
        <Text
          style={{
            fontWeight: "bold",
            marginBottom: 15,
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          Miscellaneous
        </Text>
        {arr.map((item) => (
          <BtnComp name={item.title} route={item.route} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Settings;
