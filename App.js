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

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => id !== goal.id));
  };

  const editNewGoalHandler = (value) => setNewGoal(value);

  const renderItem = (params) => {
    return (
      <GoalItem
        title={params.item.value}
        onDeleteGoal={deleteGoalHandler.bind(this, params.item.id)}
      />
    );
  };

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
