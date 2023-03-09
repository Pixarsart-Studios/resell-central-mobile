import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { Header } from "@react-navigation/stack";
import MainHeader from "@/Components/MainHeader/MainHeader";
import ArrowDown from "react-native-vector-icons/AntDesign";
import ArrowUp from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Cube from "react-native-vector-icons/MaterialCommunityIcons";
import Down from "react-native-vector-icons/AntDesign";
import {
  mainBlue,
  textError,
  textSuccess,
  bgLightGrey,
  strokeBlue,
} from "@/Constants/Colors";
import {
  proximaNovaAltBold,
  proximaNovaAltLight,
  proximaNovaBold,
  proximaNovaRegular,
} from "@/Constants/Fonts";
import { useSelector } from "react-redux";

const Dashboard = (props) => {
  const currentUser = useSelector((state) => state.data.currentUser);
  // console.log("current user here --- > ", currentUser);

  return (
    <SafeAreaView>
      <MainHeader
        props={props}
        heading={"Resell Central Seller"}
        icon={
          <Image
            style={{ height: 13, width: 20 }}
            resizeMode="center"
            source={require("../../Assets/Images/Hamburger.png")}
          />
        }
      />
      <View
        style={{
          backgroundColor: "rgba(77, 85, 159, 0.1)",
          height: 70,
          width: "85%",
          marginLeft: 24,
          borderRadius: 5,
          marginTop: 15,
          marginRight: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 60, width: 60, marginTop: 5 }}
            source={require("../../Assets/Images/Avatar.png")}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 14,
                lineHeight: 16.8,
                fontFamily: proximaNovaBold,
              }}
            >
              John Diggle
            </Text>
            <Text>Store Name - 353 Products</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "rgba(77, 85, 159, 0.1)",
          height: 160,
          width: "85%",
          marginLeft: 24,
          borderRadius: 5,
          marginTop: 20,
          marginRight: 24,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: 143,
            width: 148,
            backgroundColor: "white",
            marginLeft: 8,
            marginTop: 8,
            borderRadius: 5,
            justifyContent: "center",
            //  alignItems: 'center'
            paddingLeft: 24,
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 18.2,
              fontFamily: proximaNovaRegular,
            }}
          >
            Customers
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 24,
              lineHeight: 18.2,
              fontFamily: proximaNovaBold,
              paddingTop: 12,
            }}
          >
            1024
          </Text>
          <View
            style={{
              backgroundColor: "pink",
              height: 30,
              width: 70,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 3,
            }}
          >
            {/* <AntDesign name='arrowdown' size={20}/> */}
            <ArrowDown name="arrowdown" size={12} color={textError} />
            <Text
              style={{
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 16,
                fontFamily: proximaNovaRegular,
                color: textError,
              }}
            >
              37.8%
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              height: 143,
              width: 148,
              marginLeft: 8,
              marginTop: 8,
              borderRadius: 5,
              justifyContent: "center",
              //  alignItems: 'center'
              paddingLeft: 12,
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 14,
                lineHeight: 18.2,
                fontFamily: proximaNovaRegular,
              }}
            >
              Today's Sales
            </Text>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 24,
                lineHeight: 18.2,
                fontFamily: proximaNovaBold,
                paddingTop: 12,
              }}
            >
              $9534.25
            </Text>
            <View
              style={{
                backgroundColor: "#D0F0C0",
                height: 30,
                width: 70,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                borderRadius: 3,
              }}
            >
              {/* <AntDesign name='arrowdown' size={20}/> */}
              <ArrowUp name="arrowup" size={12} color={textSuccess} />
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 12,
                  lineHeight: 16,
                  fontFamily: proximaNovaRegular,
                  color: textSuccess,
                }}
              >
                37.8%
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "#F08F21",
            height: 83,
            width: 156,
            marginLeft: 24,
            borderRadius: 5,
            marginTop: 16,
            paddingTop: 24,
            paddingLeft: 24,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              color={"white"}
              name="clipboard-text-outline"
              size={17}
            />
            <Text style={{ color: "white", paddingLeft: 7 }}>New Orders</Text>
          </View>
          <Text style={{ color: "white", fontWeight: "700", paddingLeft: 24 }}>
            154
          </Text>
        </View>

        <View
          style={{
            backgroundColor: mainBlue,
            height: 83,
            width: 140,
            borderRadius: 5,
            marginTop: 16,
            marginLeft: 11,
            marginRight: 24,
          }}
        >
          <View
            style={{ flexDirection: "row", paddingLeft: 22, paddingTop: 24 }}
          >
            <Cube color={"white"} name="cube-outline" size={17} />
            <Text style={{ color: "white", paddingLeft: 3 }}>
              Ready to Ship
            </Text>
          </View>
          <Text style={{ color: "white", fontWeight: "700", paddingLeft: 42 }}>
            54
          </Text>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          margin: 24,
          height: "32%",
          borderColor: bgLightGrey,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              lineHeight: 21.6,
              paddingTop: 32,
            }}
          >
            Product Views
          </Text>
          <View
            style={{
              backgroundColor: bgLightGrey,
              height: 30,
              width: 100,
              marginTop: 32,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Weekly</Text>
            <View style={{ paddingLeft: 7 }}>
              <Down name="down" size={12} />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              paddingLeft: 12,
            }}
          >
            <Text>40</Text>
            <Text>30</Text>
            <Text>20</Text>
            <Text>10</Text>
            <Text>00</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              paddingLeft: 15,
              paddingTop: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 120,
                width: 10,
                backgroundColor: strokeBlue,
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
              }}
            ></View>
            <Text>Mon</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              paddingLeft: 15,
              paddingTop: 36,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 100,
                width: 10,
                backgroundColor: strokeBlue,
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
              }}
            ></View>
            <Text>Tue</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              paddingLeft: 15,
              paddingTop: 56,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 80,
                width: 10,
                backgroundColor: strokeBlue,
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
              }}
            ></View>
            <Text>Wed</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              paddingLeft: 15,
              paddingTop: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 130,
                width: 10,
                backgroundColor: strokeBlue,
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
              }}
            ></View>
            <Text>Thu</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              paddingLeft: 17,
              paddingTop: 24,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 110,
                width: 10,
                backgroundColor: strokeBlue,
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
              }}
            ></View>
            <Text>Fri</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              paddingLeft: 17,
              paddingTop: 13,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 120,
                width: 10,
                backgroundColor: strokeBlue,
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
              }}
            ></View>
            <Text>Sat</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              paddingLeft: 11,
              paddingTop: 89,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 43,
                width: 10,
                backgroundColor: strokeBlue,
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
              }}
            ></View>
            <Text>Sun</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
