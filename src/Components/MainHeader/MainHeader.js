import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-vector-icons/Icon";
import styles from "./styles";

const MainHeader = memo(
  ({ containerStyle, heading, navigation, isLogout, onPress, back, icon }) => {
    return (
      <View style={[styles.container, { ...containerStyle }]}>
        {back ? (
          <TouchableOpacity style={styles.leftViewStyle} onPress={onPress}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
        ) : null}
        {icon ? (
          <TouchableOpacity
            onPress={() => props?.navigation?.openDrawer()}
            style={styles.leftViewStyle}
            // onPress={onPress}
          >
            <Text style={styles.icon}>{icon}</Text>
          </TouchableOpacity>
        ) : null}

        <View style={[styles.middleViewStyle]}>
          <Text style={styles.text}>{heading}</Text>
        </View>
        <View style={styles.rightViewStyle}></View>
      </View>
    );
  }
);

export default MainHeader;
