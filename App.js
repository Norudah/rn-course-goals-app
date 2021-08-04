import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const addNewGoalHandler = () => {
    setGoals((currGoals) => [
      ...currGoals,
      { id: Math.random().toString(), value: newGoal },
    ]);
  };

  const editNewGoalHandler = (value) => setNewGoal(value);

  const renderItem = (params) => <GoalItem title={params.item.value} />;

  return (
    <View style={styles.layout}>
      <GoalInput
        placeholder="Nouvel objectif..."
        editNewGoal={editNewGoalHandler}
        addNewGoal={addNewGoalHandler}
      />
      <FlatList data={goals} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    padding: 50,
  },
});
