import React from "react";
import { View, Button, StyleSheet, TextInput, Modal } from "react-native";

const GoalInput = props => {
  const {
    goalInputHandler,
    enteredGoal,
    addGoalHandler,
    visible,
    setEnteredGoal,
    setIsAddMode
  } = props;

  const onGoalHandler = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course  Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => {
                setIsAddMode(false);
              }}
            />
          </View>
          <Button title="ADD" onPress={onGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
