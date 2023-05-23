import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { default as theme } from '../../assets/themes/custom-theme.json';
import { style } from "../../assets/themes/style";

const Link = ({ text, action }) => {
  return (
    <TouchableOpacity
      onPress={action}
    >
      <Text
        category="label"
        style={{
          ...style.link
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>)
}


export default Link;