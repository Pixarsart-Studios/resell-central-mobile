import { View, Text, StatusBar, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import { Header } from "@react-navigation/stack";

const StoreInformation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#FFFFFF"} />
      <View style={styles.childContainer}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Store information</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit consectetur elit.
          </Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.emailLabel}>Business Name</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.input} />
          <View style={styles.passwordLabel}>
            <Text style={styles.passwordLabelText}>Business Location</Text>
          </View>
          <Input style={styles.input} />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.emailLabel}>Business Contact</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input style={styles.input} />
          <View style={styles.passwordLabel}>
            <Text style={styles.passwordLabelText}>Business Email</Text>
          </View>
          <Input style={styles.input} />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title={"SUBMIT"}
            onPress={() => navigation.replace("MainNavigator")}
          />
        </View>
      </View>
    </View>
  );
};

export default StoreInformation;
