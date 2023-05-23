import React from "react";
import { StyleSheet } from "react-native";

import { Input } from "@ui-kitten/components";

const styles = StyleSheet.create({
  formControl: {
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 25,
    elevation: 2,
    paddingTop: 0,
  },
  fontStyle: {
    color: '#000000',
    fontSize: 16
  }
})

const TextArea = ({ title, width = '100%', onChangeText, onBlur, value, lines }) => {
  return (
    <Input
      textAlignVertical="top"
      style={
        {
          ...styles.formControl,
          width: width
        }
      }
      textStyle={
        { ...styles.fontStyle }
      }
      placeholder={title}
      size='large'               
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      multiline={true}
      numberOfLines={lines}
    />
  )
}

export default TextArea;