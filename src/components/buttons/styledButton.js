import React from "react";
import { StyleSheet } from "react-native";

import { Button } from "@ui-kitten/components";
import Icon from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  ButtonStyle: {
    borderRadius: 50,
    marginVertical: 5,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
}
);

const StyledButton = ({ placeholder, style, action, icon, iconColor }) => {
  return (
    <Button
      status='primary'
      appearance='filled'
      accessoryLeft={({ color = iconColor }) => {
        return < Icon style={{ display: icon === undefined ? 'none' : 'flex' }} name={icon} color={color} size={25} />
      }}
      style={{
        ...styles.ButtonStyle,
        ...style
      }}
      onPress={action}
    >
      {placeholder}
    </Button>
  );
}

export default StyledButton;