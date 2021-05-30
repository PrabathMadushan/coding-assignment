import React from "react";
import { View, StyleSheet, Text,ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { StackNavigationProp } from '@react-navigation/stack';
import { Screens } from "../../../App";

type ProfileScreenNavigationProp = StackNavigationProp<
  any,
  'Profile'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const SplashScreen = (props:Props) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
      <Ionicons name="call-sharp" size={32} color="#303846" onPress={()=>{
        props.navigation.navigate(Screens.LOGIN);
      }}/>
      </View>
     
      <Text style={styles.headerText}>All People In One Place</Text>
      <Text style={styles.normalText}>Find any contact you need !</Text>
      <ActivityIndicator style={{marginTop:10}} size="large" color="#00ead3" />
      <Text style={styles.normalText}>loading...</Text>
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
    marginTop:5,
    color:"#bbb"
  },
  normalText: {
    fontSize: 14,
    marginTop:5,
    color:"#bbb"
  },
  icon:{
    backgroundColor:"#00ead3",
    padding:10,
    borderRadius:10

    
  }
});

export default SplashScreen;
