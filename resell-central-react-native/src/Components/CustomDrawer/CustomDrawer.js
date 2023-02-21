import { View, Text, Image } from 'react-native'
import React from 'react'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: 'white' }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ height: 80, width: 80, margin: 24 }}
            source={require('../../Assets/Images/Avatar.png')}
          />
          <View
            style={{
              flexDirection: 'column',
              paddingTop: 35,
              paddingLeft: -19,
            }}
          >
            <Text>Johen Diggle</Text>
            <Text>Edit Profile</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>X Close</Text>
      </View>
    </View>
  )
}

export default CustomDrawer
