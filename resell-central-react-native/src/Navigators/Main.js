import React from "react";
import { Image, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@/screens/Home/Home";
import Notifications from "@/screens/Nofitications/Notifications";
import Orders from "@/screens/Orders/Orders";
import Account from "@/screens/Account/Account";
import Dashboard from "@/screens/Dashboard/Dashboard";

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          // backgroundColor: theme.white_off,
          // flex: 1,
          elevation: 0,
          height: Platform.OS === "ios" ? 50 : 50,
          // width: "100%",
          // borderRadius: 7,
          // alignSelf: "center",
          // bottom: 10,
          // alignItems: 'center',
          // justifyContent: 'center'
        },
      }}
    >
      {/* <Tab.Screen name="DashboardScreen" component={Dashboard} /> */}

      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: (focused) => (
            <Image
              source={require("../Assets/Images/home.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#4D559F" : "black",
              }}
            />
          ),
          tabBarLabelStyle: {
            color: "#4D559F",
            fontWeight: "700",
            paddingBottom: 5,
          },
          // tabBarIconStyle: { display: "none" },
          // tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
          tabBarIcon: (focused) => (
            <Image
              source={require("../Assets/Images/notification.png")}
              style={{
                width: 17,
                height: 20,
                tintColor: focused ? "#4D559F" : "black",
              }}
            />
          ),
          tabBarLabelStyle: {
            color: "#4D559F",
            fontWeight: "700",
            paddingBottom: 5,
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: (focused) => (
            <Image
              source={require("../Assets/Images/manageOrdersIcon.png")}
              style={{
                width: 17,
                height: 20,
                tintColor: focused ? "#4D559F" : "black",
              }}
            />
          ),
          tabBarLabelStyle: {
            color: "#4D559F",
            fontWeight: "700",
            paddingBottom: 5,
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: (focused) => (
            <Image
              source={require("../Assets/Images/account.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#4D559F" : "black",
              }}
            />
          ),
          tabBarLabelStyle: {
            color: "#4D559F",
            fontWeight: "700",
            paddingBottom: 5,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
