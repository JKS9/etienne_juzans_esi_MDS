import React from 'react';
import {Text, View} from 'react-native';

import styles from './TasksListHeaderStyle';

const TasksListHeader = ({tasks}) => {
  return (
    <View style={styles.container}>
      <View style={styles.part}>
        <Text style={styles.partCount}>{tasks.length}</Text>
        <Text style={styles.partText}>Tâches crées</Text>
      </View>
      <View style={styles.part}>
        <Text style={styles.partCount}>
          {tasks.filter((o) => o.isChecked).length}
        </Text>
        <Text style={styles.partText}>Tâches complétées</Text>
      </View>
    </View>
  );
};

export default TasksListHeader;
