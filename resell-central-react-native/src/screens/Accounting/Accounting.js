import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useContext, useState } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import AuthContext from "@/Config/AuthContext";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./styles";
import Button from "@/Components/Button/Button";
import Input from "@/Components/Input/Input";

const Accounting = (props) => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const categories = ["Income", "Expense"];
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const incomeDataArray = [
    {
      image: require("../../Assets/Images/incomeDataImage.png"),
      name: "Seller Water Bottle",
      date: "15-01-2023 at 05:33pm",
      price: "$25.27",
    },
    {
      image: require("../../Assets/Images/incomeDataImage.png"),
      name: "Seller Water Bottle",
      date: "15-01-2023 at 05:33pm",
      price: "$25.27",
    },
    {
      image: require("../../Assets/Images/incomeDataImage.png"),
      name: "Seller Water Bottle",
      date: "15-01-2023 at 05:33pm",
      price: "$25.27",
    },
  ];

  const CategoryList = () => {
    return (
      <View style={{ height: 70 }}>
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
        props={props}
        icon={
          <Image
            style={styles.headerImageStyle}
            resizeMode="center"
            source={require("../../Assets/Images/Hamburger.png")}
          />
        }
        heading={language?.accounting}
      />
      <ScrollView>
        <View style={styles.backgroundImageView}>
          <LinearGradient
            colors={["#8A90C6", "#4D559F"]}
            style={styles.linearGradient}
          >
            <View style={styles.leftImageViewContainer}>
              <View style={styles.leftView}>
                <Text style={styles.sameText}>{language?.activePlan}</Text>
                <Text style={styles.bussinessPlanText}>
                  {language?.businessPlan}
                </Text>
                <View style={styles.priceAndDayInCardView}>
                  <Text style={styles.priceText}>{language?.$300}</Text>
                  <Text style={styles.dayText}>{language?.mon}</Text>
                </View>
                <Image
                  style={styles.upgradePlanButton}
                  source={require("../../Assets/Images/upgradePlanButton.png")}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.rightView}>
                <Text style={styles.sameText}>{language?.reNewOn}</Text>
                <Text style={styles.sameText}>{language?.reNewDate}</Text>
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#8A90C6", "#4D559F"]}
            style={styles.linearGradient2}
          >
            <View style={styles.rightImageView}>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Image
                  style={styles.addLogo}
                  source={require("../../Assets/Images/addIcon.png")}
                  resizeMode="contain"
                />

                <View style={styles.addExpenseBtnView}>
                  <Text style={styles.addExpenseText}>{language?.add}</Text>
                  <Text style={styles.addExpenseText}>{language?.expense}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View>
          <Text style={styles.headingText}>{language?.stats}</Text>
          <View style={styles.barChartMainView}>
            <View style={styles.yearSpanView}>
              <Text>{language?.day}</Text>
              <Text>{language?.week}</Text>
              <Text>{language?.month}</Text>
              <Text>{language?.year}</Text>
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
              <Text>{language?.mon}</Text>
              <Text>{language?.tue}</Text>
              <Text>{language?.wed}</Text>
              <Text>{language?.thu}</Text>
              <Text>{language?.fri}</Text>
              <Text>{language?.sat}</Text>
              <Text>{language?.sun}</Text>
            </View>
          </View>
          <View style={styles.checkBoxAndTextView}>
            <View style={styles.optionStyle}>
              <TouchableOpacity style={[styles.radio]}>
                <View style={styles.innerRedio} />
              </TouchableOpacity>
              <Text style={[styles.textStyle, { marginLeft: 20 }]}>
                {language?.profit}
              </Text>
            </View>

            <View style={styles.optionStyle}>
              <TouchableOpacity style={[styles.radio]}>
                <View style={styles.innerRedio2} />
              </TouchableOpacity>
              <Text style={[styles.textStyle, { marginLeft: 20 }]}>
                {language?.expenses}
              </Text>
            </View>
          </View>
          <Text style={styles.headingText}>{language?.history}</Text>
          <CategoryList />
          <View style={styles.line} />

          <ScrollView>
            {incomeDataArray.map((data, i) => {
              return (
                <View key={i}>
                  <View style={styles.listView}>
                    <Image style={styles.image} source={data.image} />
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <Text style={styles.nameText}>{data.name}</Text>
                        <Text style={styles.dateText}>{data.date}</Text>
                      </View>
                      <Text style={styles.price}>+{data.price}</Text>
                    </View>
                  </View>
                  <View style={styles.line} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalLine} />
                <View style={styles.modalHeading}>
                  <Text style={styles.headingTextModal}>
                    {language?.addExpense}
                  </Text>
                </View>
                <View style={styles.labelContainer}>
                  <Text style={styles.emailLabel}>{language?.marketing}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Input style={styles.input} />
                  <View style={styles.passwordLabel}>
                    <Text style={styles.passwordLabelText}>
                      {language?.inventory}
                    </Text>
                  </View>
                  <Input style={styles.input} />
                </View>
                <View style={styles.labelContainer}>
                  <Text style={styles.emailLabel}>{language?.promotions}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Input style={styles.input} />
                  <View style={styles.passwordLabel}>
                    <Text style={styles.passwordLabelText}>
                      {language?.investments}
                    </Text>
                  </View>
                  <Input style={styles.input} />
                </View>
                <Text style={styles.addMoreText}>+ {language?.ADDMORE}</Text>
                <Button
                  title={language?.ADDEXPENSES}
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Accounting;
