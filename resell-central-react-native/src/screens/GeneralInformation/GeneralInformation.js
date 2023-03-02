import { View, Text, Image, StatusBar, ScrollView } from 'react-native'
import React,{useContext} from 'react'
import Input from '@/Components/Input/Input'
import Button from '@/Components/Button/Button'
import { styles } from './styles'
import MainHeader from '@/Components/MainHeader/MainHeader'
import AuthContext from '@/Config/AuthContext'
import { SafeAreaView } from 'react-native'

const GeneralInformation = ({ props, navigation }) => {

  const {myState} = useContext(AuthContext)
  const {language} = myState;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
      backgroundColor={'#FFFFFF'}/>
       <MainHeader
       back={language?.back}
        heading={language?.generalInformation}
      />
      <ScrollView style={styles.childContainer}>
       
        <View style={styles.heading}>
          <Text style={styles.headingText}>{language?.storeDetails}</Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.storeNameLabelText}>{language?.storeName}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.input} />
          <View style={styles.remainingLabelsView}>
            <Text style={styles.remainingLabelsText}>{language?.storeEmail}</Text>
          </View>
          <Input style={styles.input} />
        </View>

        
        <Text style={styles.messageText}>{language?.weWillUseThisAddressIfWeNeedToContactYouAboutYourStore}</Text>
       
       <View style={styles.singleInputView}>
       <View style={styles.remainingLabelsView}>
            <Text style={styles.remainingLabelsText}>{language?.senderEmail}</Text>
          </View>
        <Input style={styles.input} />
       </View>

       <Text style={styles.messageText}>{language?.yourCustomersWillSeeThisAddressIfYouEmailThem}</Text>
        
       <View style={styles.singleInputView}>
       <View style={styles.remainingLabelsView}>
            <Text style={styles.remainingLabelsText}>{language?.storeIndustry}</Text>
          </View>
        <Input style={styles.input} />
        <Image style={styles.inputIcon} 
        source={require('../../Assets/Images/angleDown.png')}
        resizeMode='contain' />
       </View>
        <View style={styles.heading}>
        <Text style={styles.headingText}>{language?.storeAddress}</Text>
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.storeNameLabelText}>{language?.legalNameOfCompany}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.input} />
          <View style={styles.remainingLabelsView}>
            <Text style={styles.remainingLabelsText}>{language?.phoneNumber}</Text>
          </View>
          <Input style={styles.input} />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.storeNameLabelText}>{language?.addressLine1}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.input} />
          <View style={styles.remainingLabelsView}>
            <Text style={styles.remainingLabelsText}>{language?.addressLine2}</Text>
          </View>
          <Input style={styles.input} />
        </View>

        <View style={styles.singleInputView}>
       <View style={styles.remainingLabelsView}>
            <Text style={styles.remainingLabelsText}>{language?.countryRegion}</Text>
          </View>
        <Input style={styles.input} />
        <Image style={styles.inputIcon} 
        source={require('../../Assets/Images/angleDown.png')}
        resizeMode='contain' />
       </View>

       <View style={styles.singleInputView}>
       <View style={styles.remainingLabelsView}>
            <Text style={styles.remainingLabelsText}>{language?.postalCode}</Text>
          </View>
        <Input style={styles.input} />
        <Image style={styles.inputIcon} 
        source={require('../../Assets/Images/angleDown.png')}
        resizeMode='contain' />
       </View>
        <View style={styles.buttonContainer}>
        <Button title={language?.save} 
         />

         <Text style={styles.cancel}>
            {language?.cancel}
         </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default GeneralInformation
