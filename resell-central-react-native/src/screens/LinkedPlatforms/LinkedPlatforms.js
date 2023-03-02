import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import MainHeader from "@/Components/MainHeader/MainHeader";
import AuthContext from "@/Config/AuthContext";
import { Image } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { linkedPlatformsData } from "../../../DummyData";

const LinkedPlatforms = () => {
  const { myState } = useContext(AuthContext);
  const { language } = myState;
  const [connect, setConnect] = useState(false) 

  const Item = ({ title, image, detail }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemView}>
        <Image style={styles.logo} source={image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.detail}>{detail}</Text>
          <TouchableOpacity style={connect == false? styles.connectButton: styles.connectedButton}
          onPress={()=> setConnect(true)}
          >
            <Text style={connect == true ? styles.connectedText : null}>{connect == false ? language?.connect : language?.connected }</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <MainHeader back={language?.back} heading={language?.linkedPlatforms} />
      <View>
        <FlatList
          key={2}
          data={linkedPlatformsData}
          renderItem={({ item, i }) => (
            <Item
              keyExtractor={(item) => item.id}
              title={item.name}
              image={item.image}
              detail={item.detail}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default LinkedPlatforms;
