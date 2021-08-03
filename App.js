// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.layout}>
      <View style={styles.topBar}>
        <TextInput style={styles.input} placeholder="Entrer un goal ici..." />
        <Button title="Ajouter" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 50,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 15,
  },
});
