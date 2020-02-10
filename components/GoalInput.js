import React from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";

const GoalInput = props => {
  const { goalInputHandler, enteredGoal, addGoalHandler } = props;

  return (
    <View style={styles.input}>
      <TextInput
        placeholder="Course  Goal"
        style={styles.inputContainer}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default GoalInput;
