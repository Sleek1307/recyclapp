import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { Text } from "@ui-kitten/components";

import theme from "../../assets/themes/theme";
import { default as colorTheme } from '../../assets/themes/custom-theme.json'
const style = StyleSheet.create({
  text: {
    color: colorTheme["color-primary-600"],
    fontSize: theme.fontSizes.body,
    textDecorationLine: 'underline',
  }
})

const Link = ({ text, action }) => {
  return (
    <TouchableOpacity
      onPress={action}
      underlayColor={theme.colors.dark}
    >
      <Text
        category="label"
        style={{
          ...style.text
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>)
}


export default Link;