import { bgWhite } from '@/Constants/Colors';
import All from '@/screens/All/All';
import Canceled from '@/screens/Canceled/Canceled';
import Pending from '@/screens/Pending/Pending';
import Shipped from '@/screens/Shipped/Shipped';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { SafeAreaView } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
   
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: bgWhite },
    }}>
      
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Shipped" component={Shipped} />
      <Tab.Screen name="Pending" component={Pending} />
      <Tab.Screen name="Canceled" component={Canceled} />
      
    </Tab.Navigator>
  );
}

export default TopTabs;