import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const IdeaInput = (props) => {
  const [enteredIdea, setEnteredIdea] = useState('');

  const ideaInputHandler = (enteredText) => {
    setEnteredIdea(enteredText);
  }

  const addIdeaHandler = () => {
    props.onAddIdea(enteredIdea);
    setEnteredIdea('');
  }

  const onCancel = () => {
    props.onCancel();
    setEnteredIdea('');
  }

  return(
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Idea"
          style={styles.input}
          onChangeText={ideaInputHandler}
          value={enteredIdea}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='ADD' color='#336699' onPress={addIdeaHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    margin: 10,
    width: 100,
  }
})

export default IdeaInput;