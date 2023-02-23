import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { proximaNovaAltBold, proximaNovaAltLight } from '@/Constants/Fonts'
import { mainBlue, textBlack, textDarkGrey } from '@/Constants/Colors'


const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: 'white' }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.avatar}
            source={require('../../Assets/Images/Avatar.png')}
          />
          <View
            style={styles.userNameAndEditProfileTextView}
          >
            <Text style={styles.userName}>John Diggle</Text>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </View>
        </View>
        <View
        style={styles.line}
      />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.closeButtonView}>
        <Text style={styles.closeButton}>X Close</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1
   },
  userName: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.2,
    fontFamily: proximaNovaAltBold,
    color: textBlack
  },
  avatar : { 
    height: 80, 
    width: 80, 
    margin: 24
   },
  editProfileText: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14.62,
    color: mainBlue,
    fontFamily: proximaNovaAltLight,
    paddingTop: 4
  },
  closeButton: {
   padding: 32,
   fontWeight: '400',
   fontSize: 16,
   lineHeight: 20.8,
   color: textDarkGrey,
   fontFamily: proximaNovaAltLight
  },
  userNameAndEditProfileTextView: {
    flexDirection: 'column',
    paddingTop: 35,
    paddingLeft: -19,
  },
  line: {
    height: 0.2,
    width: '85%',
    backgroundColor: '#212121',
    marginLeft: 24,
    marginTop: 8,
  }
})

export default CustomDrawer

