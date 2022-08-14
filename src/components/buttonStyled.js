import React from "react";
import { TouchableHighlight, StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: theme.colors.terciary,
    borderRadius: 15,
    width: '50%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 3.84,
    elevation: 3
  },
  placeholder: {
    color: theme.colors.black,
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.semiBold,
    fontSize: theme.fontSizes.header,
  }
}
);

const ButtonStyled = ({ text, style, action }) => {

  return (
    <TouchableHighlight
      onPress={action}
      underlayColor={theme.colors.dark}
      activeOpacity={0.5}
      style={{
        ...styles.ButtonStyle,
        ...style
      }}
    >
      <Text style={{
        ...styles.placeholder,
      }}>
        {text}
      </Text>
    </TouchableHighlight>
  );
}

export default ButtonStyled;