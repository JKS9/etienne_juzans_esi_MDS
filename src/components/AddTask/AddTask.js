import React, {useState, useCallback} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './AddTaskStyle';

const AddTask = ({onAddTask}) => {
  const [text, setText] = useState('');

  const addTask = useCallback(() => {
    onAddTask(text);
  }, [text, onAddTask]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nom de la tâche"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.btn} onPress={addTask}>
        <Text style={styles.btnText}>AJOUTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTask;
