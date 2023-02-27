import { bgBlack, bgLightGrey, bgWhite, strokeBlue, strokeGray, strokeWhite, textDarkGrey, textError, textLightGrey } from '@/Constants/Colors'
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
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '8%',
  },
  logo: {
    height: hp('17%'),
    width: wp('30%')
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
  emailLabel: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18.2,
    color: textDarkGrey,
  },
  passwordLabel: {
    backgroundColor: strokeWhite,
    alignSelf: 'flex-start',
    marginStart: '3%',
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: '6%',
  },
  passwordLabelText: {
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
    height: '75%',
  },
  heading: {
    paddingLeft: 24
  },
  headingText: {
    fontSize: 24,
    lineHeight: 28.8,
    color: bgBlack,
    fontFamily: proximaNovaAltBold,
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
buttonContainer:{},
  forgotTextContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 24
  },
  forgotText: {
    color: textError,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    paddingTop: '1%',
    paddingBottom: '5%',
  },
  notAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '4.5%'
  },
  noAccountText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: textDarkGrey,
  },
  signUpText: {
    color: strokeBlue,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.8,
    paddingLeft: 3,
  },
  signinwithConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '12%',
  },
  signInWithText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: textDarkGrey
  },
  signInOptionContainer: {
    flexDirection: 'row',
  },
  fbLogo: {
    marginRight: '2.5%',
    height: 40,
    width: 40,
    marginTop: '3.5%'
  },
  googleLogo: {
    marginLeft: '3%',
    height: 40,
    width: 40,
    marginTop: '3.5%'
  },
  bottomLogoView : {
    paddingTop: hp('6.5%'),
  }
})
