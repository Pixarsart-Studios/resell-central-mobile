import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
  } from "react-native";
  import React, { useState } from "react";
  import MainHeader from "@/Components/MainHeader/MainHeader";
  import SearchBar from "@/Components/Searchbar";
import { DummyData } from "../../../DummyData";
import { TouchableOpacity } from "react-native-gesture-handler";
import { bgLightGrey, bgWhite, mainBlue, textError, textLightGrey, textSuccess, textValidation } from "@/Constants/Colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
  
  const CategoryItems = () => {
    return (
      <SafeAreaView>
        <MainHeader
          back={'BACK'}
          heading="European Base Ball"
        />
        <View style={styles.inputView}>
          <SearchBar />
          <View style={styles.filteringIconView}>
            <Image
              style={styles.filteringIconImage}
              resizeMode="contain"
              source={require("../../Assets/Images/system-uicons_filtering.png")}
            />
          </View>
        </View>
        <View style={styles.secondRowView}>
          <View style={styles.checkBoxAndTextView}>
      <View style={styles.optionStyle}>
        <TouchableOpacity
          style={[
            styles.radio,
          ]}
        >
          <View style={styles.innerRedio} />
        </TouchableOpacity>
        <Text style={[styles.textStyle, { marginLeft: 20 }]}>
          Select All
        </Text>
      </View>
          </View>
         
        </View>
     
     
        {DummyData.map((item, index)=> {
            return(
                <TouchableOpacity style={styles.item}>
                    <View style={styles.itemView}>
                    <Image
                    style={styles.image} source={require('../../Assets/Images/listImage.png')}/>
                    <View style={styles.itemLeftView}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.detailText}>{item.detail}</Text>
                    <Text style={styles.detailText}>{item.vendor}</Text>
                    <Text style={
                    
                            styles.detailText }>{item.type}</Text>
                        
                    </View>
                    <View style={styles.itemRightView}>
                    <Text style={styles.price}>${item.price}</Text>
                    <View style={item.status == 'Active' ? styles.activeStatus : item.status == 'Low in Stock' ? styles.lowInStock : item.status == 'Out of Stock'? styles.outOfStock : null}>
                    <Text style={item.status == 'Active' ? styles.activeStatusText: item.status == 'Low in Stock' ? styles.lowInStockText : item.status == 'Out of Stock'? styles.outOfStockText : null}>{item.status}</Text>

                    </View>
                    </View>
                    </View>
                </TouchableOpacity>
            )
        })}
        <View style={styles.floatingButtonView}>
          <Image 
          style={styles.floatingButton}
          source={require('../../Assets/Images/floatingButtonImage.png')}/>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    headerImageStyle: {
      height: 13,
      width: 20,
    },
    inputView: {
      flexDirection: "row",
      paddingRight: 39,

    },
    filteringIconView: {
      backgroundColor: "white",
      height: 50,
      width: 50,
      borderRadius: 5,
      marginTop: 12,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: .2,
    },
    filteringIconImage: {
      height: 60,
      width: 30,
    },
    secondRowView: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: '70%',
      paddingTop: 24
    },
    checkBoxAndTextView: { justifyContent: "flex-start", flexDirection: "row" },
    selectAllText: { padding: 6 },
    floatingButtonView: {
      paddingTop: 14,
      paddingLeft: 345
    },
    floatingButton: {
      height: 45,
      width: 45
    },
    item: {
        width: '88%',
        borderRadius: 5,
        padding: 16,
        backgroundColor: bgWhite,
        marginLeft: 24,
        marginTop: 16,
        shadowColor: textLightGrey,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.7,
        elevation: 1,
    },
    itemView: {
        flexDirection: 'row',
        borderRadius: 5,
    },
  image: {
    height: 40,
    width: 40, 
    borderRadius: 5
  },
  itemLeftView: {
    flexDirection: 'column'
},
itemRightView: {
    position: 'absolute',
    justifyContent: 'flex-end',
    top: 0,
    left: 255,
},
itemName: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.8,
  },
  detailText: {
    fontWeight: '400',
    fontSize:12,
    lineHeight: 16,
    paddingTop: 4
  },
  price: {
    fontWeight: '700',
    fontSize:14,
    lineHeight: 16.8,
    color: mainBlue,
    paddingLeft: 3
  },
  activeStatusText: {
    color: textSuccess
  },
  activeStatus: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 26,
    height: 25,
    borderRadius: 5,
    backgroundColor: 'rgba(64, 191, 127, 0.1)',
  },

  lowInStock: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 26,
    height: 30,
    width:100,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 186, 51, 0.1)',
},
lowInStockText: {
    color: textValidation,
  },
  outOfStock: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 26,
    height: 30,
    width:100,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 51, 51, 0.1)',
  },
  outOfStockText: {
    color: textError
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 3,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: bgLightGrey 
  },
  innerRedio: {
    height: 22,
    width: 22,
    borderRadius: 3,
    backgroundColor: bgLightGrey,
  },
  optionStyle: {
    width: wp(85),
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textStyle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16
  }

  });

  export default CategoryItems;
  