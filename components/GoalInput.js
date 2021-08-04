import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export default function GoalInput(props) {
  return (
    <Modal visible={props.isSetMode} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          onChangeText={props.editNewGoal}
        />
        <Button title="Ajouter" onPress={props.addNewGoal} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginRight: 15,
    marginBottom: 15,
    width: "80%",
  },
});
