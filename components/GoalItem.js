import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goal}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
});
