import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useContext } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import AuthContext from "@/Config/AuthContext";
import {
  primaryButton,
} from "@/Constants/Colors";
import Button from "@/Components/Button/Button";
import CustomSwitch from "@/Components/CustomSwitch/CustomSwitch";
import { bgLightGrey } from "@/Constants/Colors";
import { styles } from "./styles";
const Notifications = () => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;

  const notificationsArray = [
    {
      id: 1,
      name: "Inventory",
    },
    {
      id: 2,
      name: "Orders",
    },
    {
      id: 3,
      name: "Canceled Orders",
    },
  ];

  const Item = ({ name }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemView}>
        <View>
          <View style={styles.itemDataInnerView}>
            <Text style={styles.title}>{name}</Text>
            <CustomSwitch
              activeColor={primaryButton}
              inActiveColor={bgLightGrey}
            />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <MainHeader back={language?.back} heading={language?.notifications} />
      <Text style={styles.heading}>{language?.notificationsTriggers}</Text>

      <Text style={styles.desc}>
        {
          language?.excepteurCulpaUtNostrudProidentNullaProidentEaAdDolorEuIdIncididuntProidentEsse
        }
      </Text>
      <FlatList
        key={2}
        data={notificationsArray}
        renderItem={({ item, i }) => (
          <Item keyExtractor={(item) => item.id} name={item.name} />
        )}
      />
      <View style={styles.saveBtnView}>
        <Button title={language?.saveChanges} style={styles.saveBtn} />
        <Text style={styles.cancel}>{language?.cancel}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
