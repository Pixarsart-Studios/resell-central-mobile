import { mainBlue, strokeWhite } from '@/Constants/Colors';
import { proximaNovaRegular } from '@/Constants/Fonts';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
    justifyContent: 'center',
    alignItems: 'flex-start',
    
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
    color: mainBlue
  }
});

export default styles;
