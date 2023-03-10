import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import AuthContext from "@/Config/AuthContext";
import Button from "@/Components/Button/Button";
import { styles } from "./styles";

const UserManagement = (props) => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;

  const data = [
    {
      name: language?.johnyBrook,
      desc: language?.lastLoginStatus,
      access: language?.limitedAccess,
    },
    {
      name: language?.johnyBrook,
      desc: language?.lastLoginStatus,
      access: language?.limitedAccess,
    },
  ];

  const Item = ({ name, desc, access }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemView}>
        <View>
          <View style={styles.itemDataInnerView}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.limitedAccessTextView}>
              <Text style={styles.accessText}>{access}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.detail}>{desc}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <MainHeader back={language?.back} heading={language?.userManagement} />

      <View>
        <Text style={styles.headingText}>{language?.storeOwner}</Text>
        <Text style={styles.messageText}>
          {language?.storeOwnerHaveSomePermissionsThatCantBeAssignedToStaff}
        </Text>
      </View>
      <View style={styles.transferOwnerShipView}>
        <Image
          style={styles.img}
          source={require("../../Assets/Images/mkImage.png")}
        />
        <View>
          <Text style={styles.title}>{language?.johnAlex}</Text>
          <Text style={styles.lastLoginStatusText}>
            {language?.lastLoginStatus}
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>{language?.transferOwnerShip}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.headingText}>{language?.storeStaff}</Text>
      <View style={styles.storeStaffView}>
        <Text style={styles.descText}>
          {language?.storeOwnerHaveSomePermissionsThatCantBeAssignedToStaff}
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("AddStaff");
          }}
          style={styles.addBtn}
        >
          <Text style={styles.addBtnText}>{language?.add}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        key={2}
        data={data}
        renderItem={({ item, i }) => (
          <Item
            keyExtractor={(item) => item.id}
            name={item.name}
            desc={item.desc}
            access={item.access}
          />
        )}
      />
      <View style={styles.saveBtnView}>
        <Button title={language?.SAVE} style={styles.saveBtn} />
      </View>
      <Text style={styles.cancel}>{language?.cancel}</Text>
    </SafeAreaView>
  );
};

export default UserManagement;
