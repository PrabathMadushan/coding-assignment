import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { StackNavigationProp } from "@react-navigation/stack";

type ProfileScreenNavigationProp = StackNavigationProp<any, "Profile">;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Login = (props: Props) => {
  return (
    <View style={styles.container}>
      
      <Ionicons name="lock-closed-sharp" size={60} color="#00ead3" onPress={()=>{
        
      }}/>
      <Text style={styles.headerText}>Login with facebook</Text>
      <Text style={styles.headerText}>Login with google</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303846",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: "#bbb",
  },
  normalText: {
    fontSize: 14,
    marginTop: 5,
    color: "#bbb",
  },
  icon: {
    backgroundColor: "#00ead3",
    padding: 10,
    borderRadius: 10,
  },
});

export default Login;
