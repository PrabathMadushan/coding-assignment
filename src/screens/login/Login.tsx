import React from "react";
import { View, StyleSheet, Text, ActivityIndicator,Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { StackNavigationProp } from "@react-navigation/stack";
import DefaultButton from "../../components/button/Button";

type ProfileScreenNavigationProp = StackNavigationProp<any, "Profile">;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Login = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.loginLogo}
        source={require("../../../assets/login.png")}
      />
      <DefaultButton text="Login with facebook"/>
      <DefaultButton text="Login with google"/> 
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  
  normalText: {
    fontSize: 14,
    marginTop: 5,
    color: "#bbb",
  },
  icon: {
    backgroundColor: "rgb(70, 48, 235)",
    padding: 10,
    borderRadius: 10,
  },
  loginLogo:{
    width: 150,
    height: 150,
  }
});

export default Login;
