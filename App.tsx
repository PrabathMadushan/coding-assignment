import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is my firt app</Text>
      <Button
        onPress={()=>{
          Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        }}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={()=>{}}
        value={"welcome"}
      />
      <TextInput
       
        onChangeText={()=>{}}
        value={"45"}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff7b54",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  }
});
