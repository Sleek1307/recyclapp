import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextElement } from "react-native-elements/dist/text/Text";

const style = StyleSheet.create({
  container: {
    marginLeft: 10,
    width: '100%',
    alignItems: 'flex-start'
  },
  error: {
    color: 'red',
  }
})

const Error = ({ error }) => {
  return (
    <View
      style={{
        ...style.container
      }}
    >
      <TextElement style={style.error} >
        {error}
      </TextElement>
    </View>
  )
}

export default Error;