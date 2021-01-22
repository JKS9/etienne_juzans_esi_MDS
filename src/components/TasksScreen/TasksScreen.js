import React, {useState, useCallback, useEffect} from 'react';
import {View} from 'react-native';

import Today from '../Today/Today';
import AddTask from '../AddTask/AddTask';
import TasksList from '../TasksList/TasksList';

import styles from './TasksScreenStyle';

import {
  readTasksFromStorage,
  writeTasksToStorage,
} from '../../helpers/persistHelper';

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const newTasks = await readTasksFromStorage();
      setTasks(newTasks);
    })();
  }, []);

  const onAddTask = useCallback(
    (text) => {
      const newTask = {
        id: Math.random().toString(),
        title: text,
        isChecked: false,
      };

      const newTasks = [...tasks, newTask];

      setTasks(newTasks);
      writeTasksToStorage(newTasks);
    },
    [tasks],
  );

  const checkTask = useCallback(
    (taskId) => {
      const newTasks = tasks.map((item) => {
        if (taskId !== item.id) {
          return item;
        }

        return {
          ...item,
          isChecked: !item.isChecked,
        };
      });

      setTasks(newTasks);
      writeTasksToStorage(newTasks);
    },
    [tasks],
  );

  const deleteTask = useCallback(
    (taskId) => {
      const newTasks = tasks.filter((o) => taskId !== o.id);

      setTasks(newTasks);
      writeTasksToStorage(newTasks);
    },
    [tasks],
  );

  return (
    <View style={styles.screen}>
      <Today />
      <AddTask onAddTask={onAddTask} />
      <TasksList
        tasks={tasks}
        onCheckTask={checkTask}
        onDeleteTask={deleteTask}
      />
    </View>
  );
};

export default TasksScreen;
