import { bgBlack, bgWhite, strokeBlue, strokeGray, strokeWhite, textDarkGrey, textError, mainBlue } from '@/Constants/Colors'
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
    paddingTop: 40,
  },
  logo: {
    height: hp('17%'),
    width: wp('30%')
  },
  labelContainer: {
    backgroundColor: strokeWhite,
    alignSelf: 'flex-start',
    marginStart: 38,
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: '1.5%',
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
    marginStart: 15,
    zIndex: 1,
    elevation: 1,
    shadowColor: bgWhite,
    top: '8.5%',
  },
  passwordLabelText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18.2,
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
    // borderEndColor: 'red'

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
    paddingTop: 16,
    paddingBottom: 24,
  },
  notAccountContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    alignItems: 'center'
  },
  noAccountText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: textDarkGrey,
  },
  signUpText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20.8,
    paddingLeft: 3,
    fontFamily: proximaNovaRegular,
    paddingTop: 26
  },
  signinwithConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  signInWithText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19.49,
    color: mainBlue,
    // fontWeighgt: '600'
    fontFamily: proximaNovaRegular
  },
  signInOptionContainer: {
    flexDirection: 'row',
    // paddingTop: 40,
    
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
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20, 
    height: 48,
    justifyContent: 'space-evenly'
},
  cell: {
    width: 48,
    // height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
})
