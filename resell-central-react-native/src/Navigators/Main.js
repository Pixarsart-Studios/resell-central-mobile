import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '@/screens/Home/Home'
import Notifications from '@/screens/Nofitications/Notifications'
import Orders from '@/screens/Orders/Orders'
import Account from '@/screens/Account/Account'

const Tab = createBottomTabNavigator()
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIconStyle: { display: 'none' },
          // tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarIconStyle: { display: 'none' },
      }}
    /> 
    <Tab.Screen
    name="Orders"
    component={Orders}
    options={{
      tabBarIconStyle: { display: 'none' },
      // tabBarLabelPosition: 'beside-icon',
    }}
  />
    <Tab.Screen
     name="Account"
     component={Account}
     options={{
       tabBarIconStyle: { display: 'none' },
      //  tabBarLabelPosition: 'beside-icon',
     }}
   /> 
    </Tab.Navigator>
  )
}

export default MainNavigator
