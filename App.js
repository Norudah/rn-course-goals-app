// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const goalCards = goals.map((goal) => {
    return <Text key={goal}>{goal}</Text>;
  });

  return (
    <View style={styles.layout}>
      <View style={styles.topBar}>
        <TextInput
          style={styles.input}
          placeholder="Entrer un goal ici..."
          onChangeText={(e) => setNewGoal(e)}
        />
        <Button title="Ajouter" onPress={() => setGoals((currGoals) => [...currGoals, newGoal])} />
      </View>
      <View>{goalCards}</View>
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
