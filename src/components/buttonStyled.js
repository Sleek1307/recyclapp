import React from "react";
import { StyleSheet } from "react-native";

import { Button } from "@ui-kitten/components";

const styles = StyleSheet.create({
  ButtonStyle: {
    borderRadius: 15,
    marginVertical: 10,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
);

const ButtonStyled = ({ placeholder, style, action }) => {
  return (
    <Button
      status='primary'
      appearance='filled'
      style={{
        ...styles.ButtonStyle
      }}
      onPress={action}
    >
      {placeholder}
    </Button>
  );
}

export default ButtonStyled;