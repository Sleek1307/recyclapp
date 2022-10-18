import React from 'react';
import { StyleSheet } from 'react-native';

import { Input } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  formControl: {
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 50,
    elevation: 2
  },
  fontStyle: {
    color: '#000000',
    fontSize: 16
  }
})

const StyledInput = ({ title, icon, width, onChangeText, onBlur, value }) => {
  return (
    <Input
      style={
        width === undefined
          ? { ...styles.formControl, }
          : { ...styles.formControl, width: width }
      }
      textStyle={{
        ...styles.fontStyle
      }}
      placeholder={title}
      size='large'
      accessoryRight={<Icon name={icon} size={25} />}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
}

export default StyledInput;