import { StyleSheet } from "react-native";
import { bgLightGrey, mainBlue, textDarkGrey, textLightGrey } from '@/Constants/Colors'

export const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: 'row',
    paddingTop: 24
 },
 table: { 
    height: 50, 
    width: 140, 
    borderLeftWidth: 1, 
    borderTopWidth: 1, 
    borderColor: textLightGrey,
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    flexDirection: 'row'
},
headingAndIconView : {
    height: 50,
    width: 140,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: textLightGrey,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: { 
    height: 15,   
    width: 15
 },
 headingText:{
   fontWeight: '700',
   fontSize: 16,
   lineHeight: 19.2,
   paddingLeft: 24,
   paddingTop: 24
 },
  item : {
      flexDirection: 'row',
      flex:1,
      paddingLeft: 24,
      paddingVertical: 10
  },
  btnView: {
    paddingTop: 24
  }
})