import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface IProps {
  text: string;
  onTouch?: () => void;
  icons?: any;
  width?:number;
}

const DefaultButton = (props: IProps) => {
  return (
    <TouchableOpacity onPress={props.onTouch} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "rgb(70, 48, 235)",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin:10,
    width:230
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default DefaultButton;
