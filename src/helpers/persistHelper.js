import AsyncStorage from '@react-native-async-storage/async-storage';

const writeTasksToStorage = async (tasks) => {
  await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
};

const readTasksFromStorage = async () => {
  return JSON.parse(await AsyncStorage.getItem('tasks')) || [];
};

export {writeTasksToStorage, readTasksFromStorage};
