import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import SquareButton from "./squareButton";
import { useNavigate } from "react-router-native";

const HomeButton = () => {

  const navigate = useNavigate();

  return (
    <SquareButton
      url={require('../../img/home.png')}
      squareHeight={theme.height.h_100 * 10 / 100}
      squareWidth={theme.height.h_100 * 10 / 100}
      text='Inicio'
      textSize={theme.fontSizes.note}
      action={() => navigate('/home')}
      style={{
        ...style.squareStyle
      }}
      
    />

    
  )
}

const style = StyleSheet.create({
  squareStyle: {
    position: 'absolute',
    top: theme.height.h_100 * 72 / 100,
    left: theme.width.w_100 * 78 / 100,
    zIndex: 3
  }
})

export default HomeButton
