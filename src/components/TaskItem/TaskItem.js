import React, {useCallback} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './TaskItemStyle';

const TaskItem = ({item, onCheckTask, onDeleteTask}) => {
  const checkTask = useCallback(() => {
    onCheckTask(item.id);
  }, [item, onCheckTask]);

  const deleteTask = useCallback(() => {
    onDeleteTask(item.id);
  }, [item, onDeleteTask]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkBtn} onPress={checkTask}>
        <Icon name={item.isChecked ? 'check-square-o' : 'square-o'} size={25} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity onPress={deleteTask}>
        <Icon name="trash-o" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
