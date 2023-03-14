import { mainBlue, strokeWhite } from '@/Constants/Colors';
import { proximaNovaRegular } from '@/Constants/Fonts';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: strokeWhite,
  },
  backIconStyle: {
    width: wp('35%'),
  },
  leftViewStyle: {
    flex: 0.8,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    flexDirection: 'row',

  },
  middleViewStyle: {
    // flex: 1.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightViewStyle: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 18,
    lineHeight: 21.6,
    fontWeight: '700',
    fontFamily: proximaNovaRegular
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    lineHeight: 18,
    fontStyle: 'normal',
    textTransform: 'capitalize',
    textAlignVertical: 'center',
  },
  menu: {
    borderRadius: 5,
  },
  back: {
    color: mainBlue,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.49,
    paddingLeft: 9.5,
  },
  backArrow: {
    height: 8,
    width: 4,
    paddingTop: hp('2.1%'),
    marginLeft: hp('.5%'),
    resizeMode: 'contain',
  },
});

export default styles;
