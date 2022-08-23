import React from 'react';
import { StyleSheet } from 'react-native';

import { Input } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../assets/themes/theme';

const styles = StyleSheet.create({
  formControl: {
    width: '75%',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 15,
    elevation: 2
  },
  fontStyle: {
    color: '#000000',
    fontSize: 16
  }
})

const StyledInput = ({ title, icon, width }) => {
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
    />
  );
}

export default StyledInput;