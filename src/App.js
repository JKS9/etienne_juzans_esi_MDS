import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import moment from 'moment';
import 'moment/locale/fr';

import TasksScreen from './components/TasksScreen/TasksScreen';

moment.locale('fr');

console.log(moment.locale()); // fr

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <TasksScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
