import React, { useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { StackNavigationProp } from "@react-navigation/stack";
import { Screens } from "../../../App";
import { Auth, Hub } from "aws-amplify";

type ProfileScreenNavigationProp = StackNavigationProp<any, "Profile">;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const SplashScreen = (props: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      Auth.currentSession()
        .then((currentSession) => {
          if (currentSession) {
            props.navigation.navigate(Screens.HOME);
          }
        })
        .catch((error) => {
          props.navigation.navigate(Screens.LOGIN);
        });
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="call-sharp" size={32} color="#ccc" onPress={() => {}} />
      </View>

      <Text style={styles.headerText}>All People In One Place</Text>
      <Text style={styles.normalText}>Find any contact you need !</Text>
      <ActivityIndicator
        style={{ marginTop: 10 }}
        size="large"
        color="rgb(70, 48, 235)"
      />
      <Text style={styles.normalText}>loading...</Text>
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
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: "#333",
  },
  normalText: {
    fontSize: 14,
    marginTop: 5,
    color: "#333",
  },
  icon: {
    backgroundColor: "rgb(70, 48, 235)",
    padding: 10,
    borderRadius: 10,
  },
});

export default SplashScreen;
