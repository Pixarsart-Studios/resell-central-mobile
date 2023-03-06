import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground, FlatList } from "react-native";
import React, { useContext } from "react";
import { plansArray } from "../../../DummyData";
import MainHeader from "@/Components/MainHeader/MainHeader";
import AuthContext from "@/Config/AuthContext";
import { mainBlue, bgLightGrey, secondaryBlue, bgWhite, strokeGray, textDarkGrey, primaryButton, strokeWhite, textWhite  } from "@/Constants/Colors";
import * as Progress from "react-native-progress";
import LinearGradient from "react-native-linear-gradient";

const SubscriptionPlans = () => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;

  const Item = ({ planName, loreamIpsum, sumDolorSitAmet }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemView}>
        <View>
           <Text style={styles.title}>{planName}</Text>
        <View style={styles.priceAndDayView}>
          <Text style={styles.priceTextInGreyCard}>{language?.$300}</Text>
          <Text style={styles.dayTextInGreyCard}>{language?.dayAfterPrice}</Text>
        </View>      
           <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={{color: textDarkGrey}}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
        </View>  

        <Text style={styles.detail}>{loreamIpsum}</Text>
        </View>
       
        <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={{color: textDarkGrey}}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
        </View>  

        <Text style={styles.detail}>{sumDolorSitAmet}</Text>
        </View>
       
        <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={{color: textDarkGrey}}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
        </View>  

        <Text style={styles.detail}>{loreamIpsum}</Text>
        </View>
       
        <View style={ styles.row }>
        <View style={ styles.bullet }>
          <Text style={{color: textDarkGrey}}>{'\u2022' + " "}</Text>
        </View>
        <View style={ styles.bulletText }>
        </View>  

        <Text style={styles.detail}>{sumDolorSitAmet}</Text>
        </View>       

          <TouchableOpacity 
         style={styles.getStartedBtn}
         onPress={()=> console.log('asdasda')}
          >
            <Text style={styles.getStartedText}>{language.getStarted}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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

        <FlatList
          horizontal
          key={2}
          data={plansArray}
          renderItem={({ item, i }) => (
            <Item
            keyExtractor={(item) => item.id}
            planName={item.planName}
            loreamIpsum={item.loreamIpsum}
            sumDolorSitAmet={item.sumDolorSitAmet}
            // detail={item.detail}
            />
          )}
        />
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  blueCard: {
    height: 150,
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
    flexDirection: 'row',
    alignItems:'center'
  },
  reviewStatus: {
    paddingLeft: '18%'
  },
  billingMethodView:{
    height: 138, 
    width: '88%',
    marginTop: 24,
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
    marginVertical: 6
},
bullet: {
    width: 10
},
bulletText: {
   
},
itemView: {
  height: 257,
  width: 241,
  backgroundColor: bgLightGrey,
  borderRadius: 5,
  marginLeft: 24,
  paddingLeft: 24,
  paddingTop: 24,
  marginTop: 24
},
title: {
  fontWeight: '700',
  fontSize: 14,
  lineHeight: 16.8,
},
priceTextInGreyCard : {
  fontWeight: '700',
  fontSize: 18,
  lineHeight: 21.6,
  paddingTop: 6
},
dayTextInGreyCard: {
  fontWeight: '400',
  fontSize: 12,
  lineHeight: 16,
  color:textDarkGrey,
  paddingLeft:2,
  paddingTop: 6
},
detail: {
  fontWeight: '400',
  fontSize: 14,
  lineHeight: 18.2,
  color: textDarkGrey
},
getStartedBtn: {
  height: 32,
  width: 97,
  backgroundColor: primaryButton,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 16
},
getStartedText: {
  fontWeight: '600',
  fontSize: 10,
  lineHeight: 12.18,
  color: textWhite
}

});

export default SubscriptionPlans;
