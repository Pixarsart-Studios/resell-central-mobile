import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, {useContext, useState} from 'react'
import MainHeader from '@/Components/MainHeader/MainHeader'
import AuthContext from "@/Config/AuthContext";
import CountryPicker from 'react-native-country-picker-modal'
import { bgLightGrey, bgWhite, mainBlue, primaryButton, strokeGray, strokeWhite, textBlack, textDarkGrey } from '@/Constants/Colors';
import Input from '@/Components/Input/Input';
import Button from '@/Components/Button/Button';

const TaxScreen = () => {
    const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [country, setCountry] = useState(null)

  const onSelect = (country) => {
    setCountry(country)
  }

  return (
    <SafeAreaView>
  <MainHeader back={language?.back} heading={language?.tax} />
    
    <Text style={styles.heading}>{language?.taxes}</Text>
    <Text style={styles.desc}>{language?.manageHowYourStoreChargesSalesTaxInYourShippingZones}</Text>
    <CountryPicker
        {...{
            onSelect,
        }}
        // visible
        />
   <View style={{ position: 'absolute', left: '10%', top: '38%' }}>
        
       {country !== null && (
           <Text style={styles.countryText}>{JSON.stringify(country.name)}</Text>
           )}
           </View>
       <View style={{flexDirection: 'row'}}>

       <View style={styles.labelContainer}>
          <Text style={styles.selectCategoryLable}>{language?.country}</Text>
        </View>

        <View style={styles.labelContainer2}>
          <Text style={styles.selectCategoryLable}>{language?.taxValue}</Text>
        </View>
       </View>
           <View style={{flexDirection: 'row'}}>

        <View style={styles.inputContainer}>
             
          <Image style={{height: 10, width: 10, position: 'absolute', left: '100%', top: '40%' }} 
        source={require('../../Assets/Images/angleDown.png')}
        resizeMode='contain' />
        </View>
     
        <View style={styles.inputContainer}> 
        <Input style={styles.input} />
        </View>

        </View>
        <View style={{height: 30, marginTop: '16%', paddingLeft: '53%'}}>
        <Text style={{color: primaryButton, fontWeight: '600', fontSize: 12, lineHeight: 14.62}}>+ {language?.addAnotherCountry}</Text>

        </View>
        <View style={styles.saveBtnView}>
        <Button title={language?.saveChanges} style={styles.saveBtn} />
      </View>
      <Text style={styles.cancel}>{language?.cancel}</Text>
    </SafeAreaView>
  )
}

export default TaxScreen

const styles = StyleSheet.create({
    heading: {
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 19.2,
      color: textBlack,
      paddingLeft: 24,
      paddingTop: 24,
      
    },
    desc: {
     fontWeight: '400',
     fontSize: 16,
     lineHeight: 20.8,
     color: textDarkGrey,
     paddingLeft: 24,
     paddingRight: 24,
     paddingTop:8,

    },
    labelContainer: {
        backgroundColor: strokeWhite,
        // alignSelf: "flex-start",
        marginStart: "8.2%",
        zIndex: 1,
        elevation: 1,
        shadowColor: bgWhite,
        top: "6.5%",
        // justifyContent: 'space-between'
      },
      labelContainer2: {
        backgroundColor: strokeWhite,
        // alignSelf: "flex-start",
        marginStart: "34.2%",
        zIndex: 1,
        elevation: 1,
        shadowColor: bgWhite,
        top: "6.5%",
        // justifyContent: 'space-between'
      },
      selectCategoryLable: {
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 18.2,
        color: textDarkGrey,
      },
      inputContainer: {
        // flex: 0.3,
        marginLeft: 24,
        paddingRight: 24,
        marginTop: 18,
        height: '300%',
        // width: 200,
        borderWidth: .5,
        width: '40%',
        borderColor: bgLightGrey
      },
      input: {
        // borderWidth: 1,
        // borderRadius: 5,
        // borderColor: strokeGray,
        height: "95%",
        width: '100%'

      },
      countryText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 20.8,
        
      },
      cancel: {
        fontWeight: "700",
        fontSize: 12,
        lineHeight: 14.62,
        color: primaryButton,
        paddingLeft: "44%",
        paddingTop: 16,
      },
      saveBtnView: {
        marginTop: '80%',
      },
  
})