import React, { useContext, useState, useEffect } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { mainBlue } from "@/Constants/Colors";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";

const Loader = ({ text }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        backgroundColor: "#000000A0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: wp(45),
          height: "17%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F2F2F2",
          borderRadius: 10,
        }}
      >
        <Image
          source={require("../../Assets/Images/loader.gif")}
          style={{ width: 100, height: 100 }}
        />
        <View style={{ height: 20, width: wp(25) }}>
          <Text style={{ color: mainBlue, fontFamily: "ProximaNovaA-Bold" }}>
            {text}
            {showText && <Text> . . .</Text>}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Loader;
