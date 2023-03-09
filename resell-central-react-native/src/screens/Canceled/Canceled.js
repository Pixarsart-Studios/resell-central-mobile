import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { useRef, useContext, useState } from "react";
import { ManageReturnsData } from "../../../DummyData";
import { styles } from "./styles";
import RBSheet from "react-native-raw-bottom-sheet";
import AuthContext from "@/Config/AuthContext";
import DatePicker from "react-native-modern-datepicker";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import SelectDropdown from "react-native-select-dropdown";

const Canceled = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const refRBSheet = useRef();
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [button, setButton] = useState(false);
  const [value, setValue] = useState(0);
  const languages = ["Flat 50% off", "French", "German", "Urdu"];

  return (
    <View style={styles.container}>
      {ManageReturnsData.map((item, index) => {
        return (
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemView}>
              <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Image
                  style={styles.image}
                  source={require("../../Assets/Images/listImage.png")}
                />
              </TouchableOpacity>
              <View style={styles.itemLeftView}>
                <Text style={styles.detailText}>{item.code}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.detailText}>{item.detail}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
              <View style={styles.itemRightView}>
                <Text style={styles.detailText}>{item.quantity}</Text>
                <View
                  style={
                    item.status == "Resolved"
                      ? styles.resolved
                      : item.status == "Resolved"
                      ? styles.resolved
                      : item.status == "Unresolved"
                      ? styles.unResolved
                      : null
                  }
                >
                  <Text
                    style={
                      item.status == "Resolved"
                        ? styles.resolvedText
                        : item.status == "Resolved"
                        ? styles.unResolved
                        : item.status == "Unresolved"
                        ? styles.unResolvedText
                        : null
                    }
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>
            <View></View>
          </TouchableOpacity>
        );
      })}

      <RBSheet
        height={450}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            shadowColor: "#000",
          },
          draggableIcon: {
            width: 150,
          },
        }}
      >
        <Text style={styles.heading}>{language?.filters}</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.calendarIcon}
            onPress={() => setButton(true)}
          >
            <Image
              style={{ height: 15, width: 15 }}
              source={require("../../Assets/Images/calendar.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Input style={styles.input} />
          <View style={styles.selectConditoinsLableView}>
            <Text style={styles.selectConditoinsLabelText}>
              {language?.date}
            </Text>
          </View>
        </View>

        <View style={styles.dropDownView}>
          <Image
            style={styles.angleDown}
            source={require("../../Assets/Images/angleDown.png")}
            resizeMode="contain"
          />

          <View style={styles.labelContainer}>
            <Text style={styles.selectCategoryLable}>
              {language?.searchByCategory}
            </Text>
          </View>
          <SelectDropdown
            buttonTextStyle={styles.buttonTextStyle}
            defaultButtonText="."
            buttonStyle={styles.btn}
            data={languages}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>

        {button == true && (
          <DatePicker onSelectedChange={(date) => setSelectedDate(date)} />
        )}

        <View style={styles.saveBtnView}>
          <Button title={language?.searchProducts} style={styles.saveBtn} />
        </View>
        <Text style={styles.cancel}>{language?.cancel}</Text>
      </RBSheet>
    </View>
  );
};

export default Canceled;
