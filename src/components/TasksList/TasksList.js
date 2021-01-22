import React from 'react';
import {FlatList, View} from 'react-native';

import TasksListHeader from '../TasksListHeader/TasksListHeader';
import TaskItem from '../TaskItem/TaskItem';

import styles from './TasksListStyle';

const TasksList = ({tasks, onCheckTask, onDeleteTask}) => {
  return (
    <View style={styles.container}>
      <TasksListHeader tasks={tasks} />
      <FlatList
        data={tasks}
        renderItem={(item) => (
          <TaskItem
            {...item}
            onCheckTask={onCheckTask}
            onDeleteTask={onDeleteTask}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TasksList;
