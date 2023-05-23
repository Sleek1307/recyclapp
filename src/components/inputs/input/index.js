import React from 'react';
import {Input} from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/Feather';
import { style } from '../../../assets/themes/style';
import theme from '../../../assets/themes/theme';

const CustomInput = ({
  icon,
  onChangeText,
  onBlur,
  value,
  placeholder,
  error
}) => {
  return (
    <Input
      placeholder={placeholder}
      inputStyle={style.formControl}
      inputContainerStyle={style.formInput}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      leftIcon={<Icon name={icon} size={32}  color={theme.colors.primary}/>}
      errorMessage={error}
      errorStyle={style.error}
    />
  );
};

export default CustomInput;
