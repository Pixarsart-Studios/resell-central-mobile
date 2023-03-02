import { bgBlack, bgWhite, strokeBlue, strokeGray, strokeWhite, textDarkGrey, textError, mainBlue, bgLightGrey, textLightGrey } from '@/Constants/Colors'
import { proximaNovaAltBold, proximaNovaRegular } from '@/Constants/Fonts'
import { StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: bgWhite
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '1.5%', 
  },
  logo: {
    height: hp('17%'),
    width: wp('30%')
  },
  heading: {
    paddingLeft: 24,
    paddingTop: 40
  },
  headingText: {
    fontSize: 24,
    lineHeight: 28.8,
    color: bgBlack,
    fontFamily: proximaNovaAltBold,
    fontWeight: '700'
  },
  descContainer: {
    paddingLeft: 24,    
    paddingTop: 8
},
descText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20.8,
    fontFamily: proximaNovaRegular,
    color: textDarkGrey,
},    
  sentCodeTextView: {
    justifyContent: 'center',
    paddingTop: 24,
    alignItems: 'center'
  },
  sentCodeText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: textDarkGrey,
  },
  userEmailText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20.8,
    paddingLeft: 3,
    fontFamily: proximaNovaRegular,
    paddingTop: 13
  },
  resendCodeConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  resendCodeText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19.49,
    color: mainBlue,
    // fontWeighgt: '600'
    fontFamily: proximaNovaRegular
  },
  fbLogo: {
    marginRight: 14,
    height: 40,
    width: 40,
    // marginTop: 16
  },
  googleLogo: {
    marginLeft: 14,
    height: 40,
    width: 40,
    // marginTop: 16, 
  },
  root: {
    flex: 1, 
    padding: 20
  },
  title: {
    textAlign: 'center', 
    fontSize: 30
  },
  codeFieldRoot: {
    justifyContent: 'space-evenly'
  },
  cell: {
    width: 48,
    height: 48,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: .5,
    borderColor: textLightGrey,
    textAlign: 'center',
    borderRadius: 5
  },
  focusCell: {
    borderColor: '#000',
  },
   bottomLogo: {
    paddingTop: hp('30%')
  }
})
