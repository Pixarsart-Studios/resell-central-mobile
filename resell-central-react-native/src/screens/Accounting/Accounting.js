import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import AuthContext from "@/Config/AuthContext";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";

const Accounting = () => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const categories = ["Income", "Expense"];
  const [categoryIndex, setCategoryIndex] = useState(0);
 
  const CategoryList = () => {
    return (
      <View>
        <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <View>
              <TouchableOpacity
                key={index}
                onPress={() => setCategoryIndex(index)}
                style={{ paddingLeft: 24 }}
              >
                <View
                  style={categoryIndex == index && styles.categoryTextSelected}
                >
                  <Text
                    key={index}
                    style={[
                      styles.categoryText,
                      categoryIndex == index && styles.categoryTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      
      </View>
    );
  };

 
  return (

    <SafeAreaView>
      <MainHeader
        icon={
          <Image
            style={styles.headerImageStyle}
            resizeMode="center"
            source={require("../../Assets/Images/Hamburger.png")}
          />
        }
        heading={language?.accounting}
      />
      <View style={styles.backgroundImageView}>
        <LinearGradient
          colors={["#8A90C6", "#4D559F"]}
          style={styles.linearGradient}
        >
          <View style={styles.leftImageViewContainer}>
            <View style={styles.leftView}>
              <Text style={styles.sameText}>Active Plan</Text>
              <Text style={styles.bussinessPlanText}>Bussiness Plan</Text>
              <View style={styles.priceAndDayInCardView}>
                <Text style={styles.priceText}>$300.00</Text>
                <Text style={styles.dayText}>/mon</Text>
              </View>
              <Image
                style={styles.upgradePlanButton}
                source={require("../../Assets/Images/upgradePlanButton.png")}
                resizeMode="contain"
              />
            </View>
            <View style={styles.rightView}>
              <Text style={styles.sameText}>Renew on:</Text>
              <Text style={styles.sameText}>20-02-2023</Text>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["#8A90C6", "#4D559F"]}
          style={styles.linearGradient2}
        >
          <View style={styles.rightImageView}>
            <Image
              style={styles.addLogo}
              source={require("../../Assets/Images/addIcon.png")}
              resizeMode="contain"
            />

            <View style={styles.addExpenseBtnView}>
              <Text style={styles.addExpenseText}>ADD</Text>
              <Text style={styles.addExpenseText}>EXPENSE</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View>
        <Text style={styles.headingText}>Stats</Text>
        <View style={styles.barChartMainView}>
          <View style={styles.yearSpanView}>
            <Text>Day</Text>
            <Text>Week</Text>
            <Text>Month</Text>
            <Text>Year</Text>
          </View>
          <View style={styles.barChartView}>
            <View style={styles.priceColumnView}>
              <Text>$400</Text>
              <Text>$300</Text>
              <Text>$200</Text>
              <Text>$100</Text>
              <Text>$0.00</Text>
            </View>
            <View style={styles.barChartPairView}>
              <View style={styles.mondayBlue} />
              <View style={styles.mondayGrey} />
            </View>

            <View style={styles.barChartPairView}>
              <View style={styles.tuesdayBlue} />
              <View style={styles.tuesdayGrey} />
            </View>
            <View style={styles.barChartPairView}>
              <View style={styles.wedBlue} />
              <View style={styles.wedGrey} />
            </View>

            <View style={styles.barChartPairView}>
              <View style={styles.thuBlue} />
              <View style={styles.thuGrey} />
            </View>

            <View style={styles.barChartPairView}>
              <View style={styles.friBlue} />
              <View style={styles.friGrey} />
            </View>

            <View style={styles.barChartPairView}>
              <View style={styles.satBlue} />
              <View style={styles.satGrey} />
            </View>

            <View style={styles.barChartPairView}>
              <View style={styles.sunBlue} />
              <View style={styles.sunGrey} />
            </View>
          </View>
          <View style={styles.weekDaysView}>
            <Text>Mon</Text>
            <Text>Tue</Text>
            <Text>Wed</Text>
            <Text>Thu</Text>
            <Text>Fri</Text>
            <Text>Sat</Text>
            <Text>Sun</Text>
          </View>
        </View>
        <View style={styles.checkBoxAndTextView}>
          <View style={styles.optionStyle}>
            <TouchableOpacity style={[styles.radio]}>
              <View style={styles.innerRedio} />
            </TouchableOpacity>
            <Text style={[styles.textStyle, { marginLeft: 20 }]}>Profit</Text>
          </View>

          <View style={styles.optionStyle}>
            <TouchableOpacity style={[styles.radio]}>
              <View style={styles.innerRedio2} />
            </TouchableOpacity>
            <Text style={[styles.textStyle, { marginLeft: 20 }]}>Expense</Text>
          </View>
        </View>
        <Text style={styles.headingText}>History</Text>
         <CategoryList />
      </View>
    </SafeAreaView>
  );
};

export default Accounting;
