import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import ApplicationNavigator from "./Application";
import Home from "@/screens/Home/Home";
import Category from "@/screens/Category/Category";
import CreateCategory from "@/screens/CreateCategory/CreateCategory";
import Collection from "@/screens/Collection/Collection";
import CreateNewCollection from "@/screens/CreateNewCollection/CreateNewCollection";
import AddProduct from "@/screens/AddProduct/AddProduct";
import Inventory from "@/screens/Inventory/Inventory";
import ProductDetails from "@/screens/ProductDetails/ProductDetails";
import InventoryAlerts from "@/screens/InventoryAlerts/InventoryAlerts";
import ManageOrders from "@/screens/ManageOrders/ManageOrders";
import ManageReturns from "@/screens/ManageReturns/ManageReturns";
import Accounting from "@/screens/Accounting/Accounting";
import Settings from "@/screens/Settings/Settings";
import Linked from "../screens/LinkedPlatforms/LinkedPlatforms";
import SubscriptionPlan from "../screens/SubscriptionPlans/SubscriptionPlans";
import UserManagement from "../screens/UserManagement/UserManagement";
import Tax from "../screens/Tax/TaxScreen";
import Shipping from "../screens/Shipped/Shipped";
import Notifications from "../screens/Nofitications/Notifications";
import StoreLanguage from "../screens/StoreLanguages/StoreLanguges";
import EmailScreen from "../screens/EmailScreen/EmailScreen";
import AddStaff from "../screens/AddStaff/AddStaff";
import CreateEmailTemplate from "../screens/CreateEmailTemplate/CreateEmailTemplate";
import CustomDrawer from "@/Components/CustomDrawer/CustomDrawer";
import Main from "@/Navigators/Main";
import { Image } from "react-native";
import { drawerItemsBackgroundColor, mainBlue } from "@/Constants/Colors";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="CreateCategory" component={CreateCategory} />
    </Stack.Navigator>
  );
};

const CollectionStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Collection" component={Collection} />
      <Stack.Screen
        name="CreateNewCollection"
        component={CreateNewCollection}
      />
    </Stack.Navigator>
  );
};

const InventoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inventory" component={Inventory} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const ManageReturnsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ManageReturns" component={ManageReturns} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Linked" component={Linked} />
      <Stack.Screen name="SubscriptionPlan" component={SubscriptionPlan} />
      <Stack.Screen name="UserManagement" component={UserManagement} />
      <Stack.Screen name="Tax" component={Tax} />
      <Stack.Screen name="Shipping" component={Shipping} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="StoreLanguage" component={StoreLanguage} />
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="AddStaff" component={AddStaff} />
      <Stack.Screen
        name="CreateEmailTemplate"
        component={CreateEmailTemplate}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -12.57,
        },
        swipeEnabled: true,
        drawerActiveBackgroundColor: drawerItemsBackgroundColor,
        drawerActiveTintColor: mainBlue,
      }}
      drawerStyle={{ width: 280 }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Image
              source={require("../Assets/Images/dashboardIcon.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                marginLeft: 12,
              }}
            />
          ),
        }}
        name="Main"
        component={Main}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Image
              source={require("../Assets/Images/categoryIcon.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                marginLeft: 12,
              }}
            />
          ),
        }}
        name="Category"
        component={CategoryStack}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Image
              source={require("../Assets/Images/collectionIcon.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                marginLeft: 12,
              }}
            />
          ),
        }}
        name="Collection"
        component={CollectionStack}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Image
              source={require("../Assets/Images/addProductIcon.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                marginLeft: 12,
              }}
            />
          ),
        }}
        name="Add a Product"
        component={AddProduct}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Image
              source={require("../Assets/Images/inventoryIcon.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                marginLeft: 12,
              }}
            />
          ),
        }}
        name="Inventory"
        component={InventoryStack}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Image
              source={require("../Assets/Images/inventoryAlerts.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                marginLeft: 12,
              }}
            />
          ),
        }}
        name="Inventory Alerts"
        component={InventoryAlerts}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Image
              source={require("../Assets/Images/manageOrdersIcon.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                marginLeft: 12,
              }}
            />
          ),
        }}
        name="Manage Orders"
        component={ManageOrders}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Image
              source={require("../Assets/Images/manageReturns.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                marginLeft: 12,
              }}
            />
          ),
        }}
        name="Manage Returns"
        component={ManageReturnsStack}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Image
              source={require("../Assets/Images/accountingIcon.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                marginLeft: 12,
              }}
            />
          ),
        }}
        name="Accounting"
        component={Accounting}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <Image
              source={require("../Assets/Images/settingsIcon.png")}
              style={{
                height: 20,
                width: 20,
                tintColor: color,
                marginLeft: 12,
              }}
            />
          ),
        }}
        name="Settings"
        component={SettingStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
