import React from 'react';
import { View, TextInput,StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  formControl: {
    width: '75%',
    height: 52,
    margin: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.colors.whiteSmoke,
    backgroundColor: theme.colors.whiteSmoke,
    color: theme.colors.black,
    borderRadius: 15,
    fontSize: theme.fontSizes.header,
    fontFamily: theme.fonts.body,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  }
})

const StyledInput = ({ placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder.text}
      placeholderTextColor={placeholder.color}
      style={{ ...styles.formControl }}
    />
  );
}

export default StyledInput;