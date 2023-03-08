import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import AuthContext from "@/Config/AuthContext";
import MainHeader from "@/Components/MainHeader/MainHeader";
import {styles} from './styles'

const EmailScreen = () => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [checked, setChecked] = useState(false);
  const [checkBoxes, setCheckBoxes] = useState([]);
  const emailScreenData = [
    {
      id: 1,
      name: "Sales",
      email: language?.infoEmail,
      status: language?.active,
    },
    {
      id: 2,
      name: "Sales",
      email: language?.infoEmail,
      status: language?.inActive,
    },
    {
      id: 3,
      name: "Sales",
      email: language?.infoEmail,
      status: language?.active,
    },
  ];

  const options2 = [language?.russian, language?.german, language?.polish];
  function pickCheckbox(selectedCheckBox) {
    console.log(checked, "checked");

    if (checkBoxes.includes(selectedCheckBox)) {
      setCheckBoxes(
        checkBoxes.filter((checkBox) => checkBox !== selectedCheckBox),
        setChecked(true)
      );
      return;
    }

    setCheckBoxes((checkBoxes) => checkBoxes.concat(selectedCheckBox));
    setChecked(false);
  }

  return (
    <SafeAreaView>
      <MainHeader back={language?.back} heading={language?.email} />

      <View>
        <View style={styles.checkBoxContainer}>
          <View style={styles.itemHeader}>
            <View style={styles.checkBoxView}>
              <TouchableOpacity
                style={
                  checked == true ? styles.checkBox : styles.selectedCheckBox
                }
                onPress={() => pickCheckbox(emailScreenData.id)}
              >
                {checkBoxes.includes(emailScreenData.id) && (
                  <Text style={styles.check}>✓</Text>
                )}
              </TouchableOpacity>
              <Text style={styles.headingText}>{language?.emailAddress}</Text>
              <Text style={styles.statusText}>{language?.status}</Text>
            </View>
          </View>
          <View style={styles.line} />
        </View>
      </View>

      {emailScreenData.map((item, index) => {
        return (
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemView}>
              <View style={styles.itemHeader}>
                <View style={styles.checkBoxView}>
                  <TouchableOpacity
                    style={
                      checked == true
                        ? styles.checkBox
                        : styles.selectedCheckBox
                    }
                    onPress={() => pickCheckbox(emailScreenData.id)}
                  >
                    {checkBoxes.includes(emailScreenData.id) && (
                      <Text style={styles.check}>✓</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.itemLeftView}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.emailText}>{item.email}</Text>
                <Text style={styles.detailText}>{item.type}</Text>
              </View>
              <View style={styles.itemRightView}>
                <View
                  style={
                    item.status == "Active"
                      ? styles.activeStatus
                      : item.status == "Inactive"
                      ? styles.lowInStock
                      : null
                  }
                >
                  <Text
                    style={
                      item.status == "Active"
                        ? styles.activeStatusText
                        : item.status == "Inactive"
                        ? styles.lowInStockText
                        : null
                    }
                  >
                    {item.status}
                  </Text>
                 
                </View>
                <Image
            style={styles.productOptionImage}
            resizeMode="contain"
            source={require("../../Assets/Images/threeDots.png")}
          />
              </View>

            </View>
            <View style={styles.line} />
          </TouchableOpacity>
        );
      })}


<View style={styles.floatingButtonView}>
          <Image 
          style={styles.floatingButton}
          source={require('../../Assets/Images/floatingButtonImage.png')}/>
        </View>
    </SafeAreaView>
  );
};

export default EmailScreen;
