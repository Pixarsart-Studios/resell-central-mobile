import { View, Text, Image, StatusBar } from 'react-native'
import React, {useState, useContext} from 'react'
import Button from '@/Components/Button/Button'
import { styles } from './styles'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import MainHeader from '@/Components/MainHeader/MainHeader'
import AuthContext from "@/Config/AuthContext";
  
const CELL_COUNT = 4;

const EnterOtpScreen = ({navigation}) => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.container}>
    <StatusBar 
    backgroundColor={'#FFFFFF'}/>
    <MainHeader back={language?.back} />
    <View style={styles.childContainer}>
      <View style={styles.logoContainer}>
        <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../../Assets/Images/Frame.png')} />
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{language?.verifyYourEmail}</Text>
        <Text style={styles.headingText}>{language?.address}</Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.descText}>
        {language?.weVeSentAOneTimEPasswordToYourPhoneNumberPleaseEnterItBelow}
        </Text>
      </View>
     <View style={{padding: 30}}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      </View>
      <View style={styles.buttonContainer}>
      <Button title={language?.verifyCode}
      onPress={()=> navigation.navigate('AddMobileNumber')}
       />
      </View>
      <View style={styles.sentCodeTextView}>
        <Text style={styles.sentCodeText}>{language?.codeWasSentToYourEmailAddress}</Text>
        <Text
         style={styles.userEmailText}>{language?.loremIpsumGmailCom}</Text>
      </View>
      <View style={styles.resendCodeConatiner}>
        <Text style={styles.resendCodeText}>{language?.resendCode}</Text>
      </View>
      <View style={styles.bottomLogo}>
      <Image 
     source={require('../../Assets/Images/Ellipse.png')} />
     </View>
    </View>
  </View>
  )
}

export default EnterOtpScreen