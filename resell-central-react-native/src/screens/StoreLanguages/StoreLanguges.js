import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useContext, useState} from 'react'
import AuthContext from "@/Config/AuthContext";
import MainHeader from '@/Components/MainHeader/MainHeader';
import SelectDropdown from 'react-native-select-dropdown'
import { bgLightGrey, bgWhite, primaryButton, strokeWhite, textDarkGrey } from '@/Constants/Colors';
import Button from '@/Components/Button/Button';


const StoreLanguges = () => {
    const [checkBoxes, setCheckBoxes] = useState([]);
    const { myState } = useContext(AuthContext);
    const { language } = myState;
    
    const languages = ["English", "French", "German", "Urdu"]
  const options = [
    language?.arabic,
    language?.french,
    language?.spanish,
    language?.russian,
    language?.german,
    language?.polish
  ];

  function pickCheckbox(selectedCheckBox) {
    if (checkBoxes.includes(selectedCheckBox)) {
      setCheckBoxes(
        checkBoxes.filter((checkBox) => checkBox !== selectedCheckBox)
      );
      return;
    }

    setCheckBoxes((checkBoxes) => checkBoxes.concat(selectedCheckBox));
  }

    return (
    <SafeAreaView>
      <MainHeader back={language?.back} heading={language?.storeLanguages} />
       <Text style={styles.heading}>{language?.defaultLanguage}</Text>
    <View style={styles.dropDownView}>
    <Image style={{height: 15, width: 15, position: 'absolute', left: '90%', top: '79%', zIndex: 1 }} 
        source={require('../../Assets/Images/angleDown.png')}
        resizeMode='contain' />    

         <View style={styles.labelContainer}>
          <Text style={styles.selectCategoryLable}>{language?.selectLanguage}</Text>
        </View>
       <SelectDropdown
       defaultButtonText='.'
       buttonStyle={styles.btn}
       data={languages}
       onSelect={(selectedItem, index) => {
           console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
/>


        </View>
        <Text style={styles.heading}>{language?.addOtherLanguagesToStore}</Text>

        {options.map((option, i) => (
              <View
                key={option}
                style={styles.checkBoxView}
              >
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={() => pickCheckbox(option)}
                >
                  {checkBoxes.includes(option) && (
                    <Text style={styles.check}>✓</Text>
                  )}
                </TouchableOpacity>
                <Text style={styles.option}>{option}</Text>
              </View>
            ))}
            
<View style={styles.saveBtnView}>
          <Button title={language?.SAVE} style={styles.saveBtn} />
        </View>
        <Text style={styles.cancel}>{language?.cancel}</Text>
    </SafeAreaView>
  )
}

export default StoreLanguges

const styles = StyleSheet.create({
    heading: {
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 19.2,
      paddingLeft: 24,
      paddingTop: 24,
    },
    btn: {
        backgroundColor: bgWhite,
        height: 65,
        width: '93%',
        borderWidth: 2,
        borderColor: bgLightGrey,
        borderRadius: 5
    },
dropDownView: {
    paddingLeft: 24,
    paddingTop: 24
},
btnText: {
    color: bgWhite,
},
labelContainer: {
    backgroundColor: strokeWhite,
    marginStart: "3.2%",
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: "9%",
    width: 120,
    justifyContent: 'center',
    alignItems:'center'
  },
  selectCategoryLable: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  checkBoxView: {
    flexDirection: "row",
    marginVertical: 10,
    paddingLeft: 24,
  },
  checkBox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: bgLightGrey,
    backgroundColor: bgLightGrey,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    color: bgWhite,
  },
  option: {
    paddingLeft: 24,
  },
  saveBtnView: {
    marginTop: 24,
  },
  cancel: {
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14.62,
    color: primaryButton,
    paddingLeft: "44%",
    paddingTop: 16,
  },
})