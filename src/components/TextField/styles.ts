import {StyleSheet, ViewStyle} from 'react-native';
import {palette} from '../../theme/palette';

// styles

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  maskInput: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 16,
    color: palette.black,
  },

  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
    color: palette.gray,
  },
  errorIcon: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  errorText: {
    marginLeft: 9.33,
    fontSize: 12,
  },
  inputWithIcon: {
    paddingRight: 40,
  },
  showPasswordButton: {
    position: 'absolute',
    bottom: 0,
    right: 5,
  },
  valid: {
    position: 'absolute',
    top: 10,
    right: 12,
  },
  limitText: {
    textAlign: 'right',
  },
});
export const inputWrapper = ({
  error,
  search,
}: {
  error: any;
  search: any;
  greenBorder?: boolean;
}): ViewStyle => ({
  borderColor: error ? 'red' : 'gray',
  paddingLeft: search ? 16 : 0,
  borderWidth: 1,
  position: 'relative',
  borderRadius: 12,
  flexDirection: 'row',
  alignItems: 'center',
});
export default styles;
