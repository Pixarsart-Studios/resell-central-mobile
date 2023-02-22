import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ApplicationNavigator from './Application'
import Home from '@/screens/Home/Home'
import Category from '@/screens/Category/Category'
import Collection from '@/screens/Collection/Collection'
import AddProduct from '@/screens/AddProduct/AddProduct'
import Inventory from '@/screens/Inventory/Inventory'
import InventoryAlerts from '@/screens/InventoryAlerts/InventoryAlerts'
import ManageOrders from '@/screens/ManageOrders/ManageOrders'
import ManageReturns from '@/screens/ManageReturns/ManageReturns'
import Accounting from '@/screens/Accounting/Accounting'
import Settings from '@/screens/Settings/Settings'
import CustomDrawer from '@/Components/CustomDrawer/CustomDrawer'
import {Image} from 'react-native'
const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: true,

      }}
      drawerStyle={{ width: 280 }}
      drawerContent={props => <CustomDrawer {...props} /> }
    >
      <Drawer.Screen
      
        options={{ headerShown: false, 
         drawerIcon: ({color}) => (
        <Image source={require('../Assets/Images/dashboardIcon.png')}
        style={{height: 20, width: 20, tintColor: color }}
         />
        )
        }}
        name="Dashboard"
        component={ApplicationNavigator}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Category"
        component={Category}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Collection"
        component={Collection}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Add a Product"
        component={AddProduct}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Inventory"
        component={Inventory}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Inventory Alerts"
        component={InventoryAlerts}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Manage Orders"
        component={ManageOrders}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Manage Returns"
        component={ManageReturns}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Accounting"
        component={Accounting}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
