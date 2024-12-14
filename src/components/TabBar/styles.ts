import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

const styles = StyleSheet.create({
  container: {
    bottom: 12,
    alignSelf: 'center',
    position: 'absolute',
    width: '92%',
    height: 76,
    backgroundColor: palette.secondary,
    paddingHorizontal: 32,
    borderRadius: 24,
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    paddingTop: 26,
  },
});

export default styles;
