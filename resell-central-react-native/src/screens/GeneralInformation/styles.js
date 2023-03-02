import { bgBlack, bgLightGrey, bgWhite, mainBlue, primaryButton, strokeBlue, strokeGray, strokeWhite, textDarkGrey, textError, textLightGrey } from '@/Constants/Colors'
import { proximaNovaAltBold, proximaNovaRegular } from '@/Constants/Fonts'
import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: bgWhite
  },
  messageText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    paddingLeft: 24,
    paddingTop: 11,
    color: textDarkGrey,
    paddingBottom: 8
  },
  labelContainer: {
    backgroundColor: strokeWhite,
    alignSelf: 'flex-start',
    marginStart: '8.2%',
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: '1%',
  },
  remainingLabelsView: {
      backgroundColor: strokeWhite,
      alignSelf: 'flex-start',
      marginStart: '3%',
      zIndex: 1,
      elevation: 1,
      shadowColor: bgWhite,
      top: '6%',
    },
    storeNameLabelText: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 18.2,
      color: textDarkGrey,
    },
    remainingLabelsText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey
  },
  inputContainer: {
    height: hp('17%'),
    paddingLeft: 24,
    paddingRight: 24,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: strokeGray,
    height: '93%',
  },
  inputIcon: {
    height: 10, 
    width: 10, 
    position: 'absolute', 
    right: '12%', 
    top: '56%' 
},
  singleInputView: {
    height: hp('9%'),
    paddingLeft: 24,
    paddingRight: 24,
    
  },
  heading: {
    padding: 24,
    
  },
  headingText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.2,
    color: bgBlack,
    // fontFamily: proximaNovaAltBold,
  },
  descContainer: {
    paddingLeft: 24,    
    paddingTop: 8
},
descText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20.8,
    // fontFamily: proximaNovaRegular,
    color: textDarkGrey,

},
buttonContainer:{
  paddingTop: 24,
},
cancel: {
    fontWeight:'700',
    fontSize: 12,
    lineHeight: 14.62,
    color: primaryButton,
    paddingLeft: '44%',
    paddingTop: 16
}
})
