import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '@/Components/MainHeader/MainHeader'
import SearchBar from '@/Components/Searchbar'
import CheckBox from '@react-native-community/checkbox'
import { mainBlue } from '@/Constants/Colors'

const Category = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View>
      <MainHeader
        icon={
          <Image
            style={{ height: 13, width: 20 }}
            resizeMode="center"
            source={require('../../Assets/Images/Hamburger.png')}
          />
        }
        heading="Categories"
      />
      <View style={{ flexDirection: 'row', paddingRight: 28 }}>
        <SearchBar />
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            width: 50,
            borderRadius: 5,
            marginTop: 12,
            // marginRight: 13,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            style={{ height: 60, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/system-uicons_filtering.png')}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 24,
        }}
      >
        <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text>Select All</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Text
            style={{
              paddingRight: 23,
              fontWeight: '600',
              fontSize: 16,
              lineHeight: 19.49,
              color: mainBlue,
            }}
          >
            IMPORT
          </Text>
          <Text style={{ paddingRight: 23, fontSize: 16, lineHeight: 19.49 }}>
            EXPORT
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <Text>Categories</Text>
        <Text>Products</Text>
      </View>
      <View
        style={{
          height: 0.2,
          width: '88%',
          backgroundColor: '#212121',
          marginLeft: 24,
          marginTop: 8,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ flexDirection: 'row', paddingLeft: 24 }}>
         <View style={{paddingTop: 5}}>

          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            </View>
            <View style={{paddingTop: 10}}>

          <Image
            style={{ height: 20, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/blueDots.png')}
            />
            </View>

          <Text style={{paddingTop: 10, paddingLeft: 3}}>Base Ball</Text>
        </View>
        <View style={{flexDirection: 'row', paddingRight: 14, paddingTop: 13}}>
          <Text>113</Text>
          <Image
            style={{ height: 20, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/threeDots.png')}
            />
        </View>
      </View>
      <View
        style={{
          height: .5,
          width: '88%',
          backgroundColor: '#212121',
          marginLeft: 24,
          marginTop: 8,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ flexDirection: 'row', paddingLeft: 24 }}>
         <View style={{paddingTop: 5}}>

          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            </View>
            <View style={{paddingTop: 10}}>

          <Image
            style={{ height: 20, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/blueDots.png')}
            />
            </View>

          <Text style={{paddingTop: 10, paddingLeft: 3}}>European Base Ball</Text>
        </View>
        <View style={{flexDirection: 'row', paddingRight: 14, paddingTop: 13}}>
          <Text>113</Text>
          <Image
            style={{ height: 20, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/threeDots.png')}
            />
        </View>
      </View>
      <View
        style={{
          height: .5,
          width: '88%',
          backgroundColor: '#212121',
          marginLeft: 24,
          marginTop: 8,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ flexDirection: 'row', paddingLeft: 24 }}>
         <View style={{paddingTop: 5}}>

          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            </View>
            <View style={{paddingTop: 10}}>

          <Image
            style={{ height: 20, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/blueDots.png')}
            />
            </View>

          <Text style={{paddingTop: 10, paddingLeft: 3}}>Australian Base Ball</Text>
        </View>
        <View style={{flexDirection: 'row', paddingRight: 14, paddingTop: 13}}>
          <Text>113</Text>
          <Image
            style={{ height: 20, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/threeDots.png')}
            />
        </View>
      </View>
      <View
        style={{
          height: .5,
          width: '88%',
          backgroundColor: '#212121',
          marginLeft: 24,
          marginTop: 8,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ flexDirection: 'row', paddingLeft: 24 }}>
         <View style={{paddingTop: 5}}>

          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            </View>
            <View style={{paddingTop: 10}}>

          <Image
            style={{ height: 20, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/blueDots.png')}
            />
            </View>

          <Text style={{paddingTop: 10, paddingLeft: 3}}>Football Ball</Text>
        </View>
        <View style={{flexDirection: 'row', paddingRight: 14, paddingTop: 13}}>
          <Text>113</Text>
          <Image
            style={{ height: 20, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/threeDots.png')}
            />
        </View>
      </View>
      <View
        style={{
          height: .5,
          width: '88%',
          backgroundColor: '#212121',
          marginLeft: 24,
          marginTop: 8,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{ flexDirection: 'row', paddingLeft: 24 }}>
         <View style={{paddingTop: 5}}>

          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            </View>
            <View style={{paddingTop: 10}}>

          <Image
            style={{ height: 20, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/blueDots.png')}
            />
            </View>

          <Text style={{paddingTop: 10, paddingLeft: 3}}>Beauty Products</Text>
        </View>
        <View style={{flexDirection: 'row', paddingRight: 14, paddingTop: 13}}>
          <Text>113</Text>
          <Image
            style={{ height: 20, width: 25 }}
            resizeMode="contain"
            source={require('../../Assets/Images/threeDots.png')}
            />
        </View>
      </View>
      <View
        style={{
          height: .5,
          width: '88%',
          backgroundColor: '#212121',
          marginLeft: 24,
          marginTop: 8,
        }}
      />
    </View>
  )
}

export default Category
