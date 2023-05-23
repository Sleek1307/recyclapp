import {StyleSheet} from 'react-native';
import theme from './theme';

export const style = StyleSheet.create({
  error: {
    fontSize: theme.fontSizes.note,
    color: theme.colors.danger,
    fontFamily: theme.fonts.baloo.semiBold,
    margin: 0,
  },
  formControl: {
    fontFamily: theme.fonts.baloo.regular,
  },
  formInput: {
    borderBottomColor: '#999999',
    overflow: 'hidden',
  },
  link: {
    fontSize: theme.fontSizes.note,
    textDecorationLine: theme.fontStyles.underline,
    color: theme.colors.primary,
    fontFamily: theme.fonts.baloo.semiBold,
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginVertical: 3,
    borderRadius: 20,
  },
  titleButton: {
    fontFamily: theme.fonts.baloo.regular,
    fontSize: theme.fontSizes.subTitle,
  },
  card: {
    borderRadius: 10
  }
});
