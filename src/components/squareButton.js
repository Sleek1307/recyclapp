import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import theme from "../theme";

const SquareButton = ({ url, text, textSize, action, squareWidth, squareHeight, style }) => {

  return (
    <TouchableOpacity
      style={{
        ...styles.square,
        ...style,
        height: squareHeight,
        width: squareWidth
      }}
      onPress={action}
    >

      <Image
        source={url}
        style={{
          ...styles.icon,
          height: squareHeight * 60 / 100,
          width: squareWidth * 60 / 100,
        }}
      />
      <Text style={{
        ...styles.text,
        fontSize: textSize
      }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  square: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.width.w_100 * 10 / 100,
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
    elevation: 2
  },
  text: {
    textAlign: theme.align.center,
    paddingHorizontal: 5,
    color: theme.colors.black,
  }
})

export default SquareButton;