import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 15,
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
