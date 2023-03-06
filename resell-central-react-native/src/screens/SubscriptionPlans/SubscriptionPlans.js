import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState, useContext } from "react";
import { linkedPlatformsData } from "../../../DummyData";
import MainHeader from "@/Components/MainHeader/MainHeader";
import AuthContext from "@/Config/AuthContext";
import { mainBlue, bgLightGrey, secondaryBlue, bgWhite, strokeGray, textDarkGrey, primaryButton, strokeWhite, textWhite  } from "@/Constants/Colors";
import * as Progress from "react-native-progress";
import LinearGradient from "react-native-linear-gradient";

const SubscriptionPlans = () => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;

  return (
    <SafeAreaView>
      <MainHeader back={language?.back} heading={language?.subscriptionPlan} />
    

      <LinearGradient colors={["#8A90C6", "#4D559F"]} style={styles.blueCard}>
        <View>
          <Text style={styles.lightText}>{language?.activePlan}</Text>
          <Text style={styles.businessPlanText}>{language?.businessPlan}</Text>
        <View style={styles.priceAndDayView}>
          <Text style={styles.priceText}>{language?.$300}</Text>
          <Text style={styles.lightText}>{language?.dayAfterPrice}</Text>
        </View>        
        </View>

        <Text style={[styles.lightText, {paddingTop: 18}]}>{language?.OutOf100Products}</Text>
        
        <View style={styles.progressBarAndDateView}>
           
          <LinearGradient
            colors={[bgLightGrey, "#4D559F"]}
            style={styles.progressBarView}
            >
            <Progress.Bar
              progress={0.3}
              width={200}
              color={secondaryBlue}
              borderRadius={5}
              />
          </LinearGradient>
          
          <View style={styles.reviewStatus}>
            <Text style={[styles.lightText, {paddingLeft: 12}]}>{language?.reNewOn}</Text>
            <Text style={styles.lightText}>{language?.reNewDate}</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.billingMethodView}>
          <Text style={styles.boldText}>{language?.billingMethod}</Text>
          <Text style={styles.masterCardNumberText}>{language?.masterCardEnding} *******0123</Text>
         <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{language?.managePaymentMethod}</Text>
         </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.otherPlansText}>
            {language?.otherPlans}
        </Text>
      
      {/* <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
          <Text>ssddsss</Text>
        </View>
        </View> */}
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  blueCard: {
    height: '30%',
    width: "88%",
    backgroundColor: mainBlue,
    borderRadius: 5,
    marginLeft: 24,
    paddingLeft: 24,
    paddingTop: 16,
  },
  progressBarAndDateView: {
    flexDirection: "row",
  },
  progressBarView: {
    height: 8,
    marginTop: 8, 
    borderRadius: 5,
  },
  lightText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: bgWhite
  },
  businessPlanText: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.6,
    color: bgWhite
  },
  priceText:{
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.8,
    color:bgWhite
  },
  priceAndDayView: {
    flexDirection: 'row'
  },
  reviewStatus: {
    paddingLeft: '18%'
  },
  billingMethodView:{
    height: '25%', 
    width: '88%',
    marginTop: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: strokeGray,
    marginLeft: 24,
},
boldText: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.8,
    paddingLeft: 24,
    paddingTop: 24
},
masterCardNumberText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight:16,
    color: textDarkGrey,
    paddingLeft: 24,
    paddingTop: 6
},
btn: {
    height: '25%',
    width: '50%',
    backgroundColor: primaryButton,
    borderRadius: 5,
    justifyContent: 'center',  
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 16,
},
btnText: {
  fontWeight: '600',
  fontSize: 10,
  lineHeight: 12.18,
  color: strokeWhite
},
otherPlansText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.2,
    paddingLeft: 24,
    paddingTop: 24
},
row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    
    marginVertical: 4
},
bullet: {
    width: 10
},
bulletText: {
   
}
});

export default SubscriptionPlans;
