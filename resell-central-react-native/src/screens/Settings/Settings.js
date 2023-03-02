import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, {useContext} from 'react'
import { styles } from './styles';
import AuthContext from '@/Config/AuthContext'
import MainHeader from '@/Components/MainHeader/MainHeader';





const Settings = () => {

  const {myState} = useContext(AuthContext)
  const {language} = myState;
  
  const settingsList = [
    {
      name: language?.generalInformation,
      image: require("../../Assets/Images/rightArrow.png"),
    },
    {
      name: language?.linkedPlatforms,
      image: require("../../Assets/Images/rightArrow.png"),
    },
    {
      name: language?.subscriptionPlan,
      image: require("../../Assets/Images/rightArrow.png"),
    },
    {
      name: language?.userManagement,
      image: require("../../Assets/Images/rightArrow.png"),
    }, {
      name: language?.tax,
      image: require("../../Assets/Images/rightArrow.png"),
    },
    {
      name: language?.shippingMethod,
      image: require("../../Assets/Images/rightArrow.png"),
    }, {
      name: language?.notifications,
      image: require("../../Assets/Images/rightArrow.png"),
    },
    {
      name: language?.storeLanguage,
      image: require("../../Assets/Images/rightArrow.png"),
    },
   
  ];
    
    const communictionsList = [
      {
        name: language?.email,
        image: require("../../Assets/Images/rightArrow.png"),
      },
    ];

  return (
    <SafeAreaView>
       <MainHeader
        icon={
          <Image
            style={styles.headerImageStyle}
            resizeMode="center"
            source={require("../../Assets/Images/Hamburger.png")}
          />
        }
        heading={language?.settings}
      />
      <View>
        <Text style={styles.heading}>{language?.miscellaneous}</Text>
      <View style={styles.line} />

      {settingsList.map((data, i) => {
        return (
          <View key={i}>
            {/* <View style={styles.listView}> */}
           <TouchableOpacity>
            <View
              style={styles.settingsView}
            >
              <Text style={styles.name}>{data.name}</Text>
              <Image style={styles.image} source={data.image} />
            </View>
            </TouchableOpacity>
            {/* </View> */}
            <View style={styles.line} />
          </View>
        );
      })}
        <Text style={styles.heading}>{language?.communications}</Text>
      <View>
      {communictionsList.map((data, i) => {
        return (
          <View key={i}>
            <View style={styles.line} />
           <TouchableOpacity>
            <View
              style={styles.settingsView}
            >
              <Text style={styles.name}>{data.name}</Text>
              <Image style={styles.image} source={data.image} />
            </View>
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
        );
      })}
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Settings