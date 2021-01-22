import React from 'react';
import {Text} from 'react-native';

import moment from 'moment';

import styles from './TodayStyle';

const Today = () => {
  return <Text style={styles.text}>{moment().format('dddd LL')}</Text>;
};

export default Today;
