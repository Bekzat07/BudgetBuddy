import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pinCodeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // marginBottom: 20,
    width: 250,
  },
  digitButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.gray,
    borderRadius: 5,
    marginBottom: 10,
  },
  digitText: {
    fontSize: 24,
  },
  backspaceButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6347',
    borderRadius: 5,
    marginBottom: 10,
  },
  backspaceText: {
    fontSize: 24,
    color: 'white',
  },
  customButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.gray,
    borderRadius: 5,
    marginBottom: 10,
  },
  customButtonText: {
    fontSize: 16,
    color: 'white',
  },
});
