import React from "react";
import { View, StyleSheet, Text, ActivityIndicator,Image } from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import DefaultButton from "../../components/button/Button";
import { Auth, Hub } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { Screens } from "../../../App";

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
      <DefaultButton text="Login with facebook" onPress={()=>{
        Auth.federatedSignIn({provider:CognitoHostedUIIdentityProvider.Facebook}).then((data)=>{
          props.navigation.navigate(Screens.HOME);
        }).catch((error)=>{

        });
      }}/>
      <DefaultButton text="Login with google" onPress={()=>{
         Auth.federatedSignIn({provider:CognitoHostedUIIdentityProvider.Google}).then((data)=>{
          props.navigation.navigate(Screens.HOME);
        }).catch((error)=>{
          
        });;
      }}/> 
      
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
