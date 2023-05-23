import React, {useState} from 'react';

import {Input} from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../../assets/themes/theme';
import { style } from '../../../assets/themes/style';

const CustomPassword = ({
  placeholder,
  label,
  onChangeText,
  onBlur,
  value,
  error,
}) => {
  const [show, setShow] = useState(false);

  return (
    <Input
      secureTextEntry={!show}
      inputStyle={style.formControl}
      inputContainerStyle={style.formInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      leftIcon={
        <Icon
          name={!show ? 'eye-off' : 'eye'}
          size={32}
          onPress={() => setShow(!show)}
          color={theme.colors.primary}
        />
      }
      errorMessage={error}
      errorStyle={style.error}
    />
  );
};

export default CustomPassword;
