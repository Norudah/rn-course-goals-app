import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from "react-native";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const addNewGoal = () => {
    setGoals((currGoals) => [
      ...currGoals,
      { id: Math.random().toString(), value: newGoal },
    ]);
  };

  const renderItem = (params) => {
    return (
      <View style={styles.goal}>
        <Text>{params.item.value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.layout}>
      <View style={styles.topBar}>
        <TextInput
          style={styles.input}
          placeholder="Entrer un goal ici..."
          onChangeText={(e) => setNewGoal(e)}
        />
        <Button title="Ajouter" onPress={addNewGoal} />
      </View>
      <FlatList data={goals} renderItem={renderItem} />
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
    paddingBottom: 10,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 15,
  },
  goal: {
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
});
