import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function GoalInput(props) {
  return (
    <View style={styles.topBar}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.editNewGoal}
      />
      <Button title="Ajouter" onPress={props.addNewGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 15,
  },
});
