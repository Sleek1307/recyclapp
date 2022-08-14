import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import SquareButton from "./squareButton";
import { useNavigate } from "react-router-native";

const FooterMenu = () => {

  const navigate = useNavigate();

  return (
    <View style={{
      ...style.menu
    }}>
      <SquareButton
        url={require('../../img/maps.png')}
        squareHeight={theme.height.h_100 * 10 / 100}
        squareWidth={theme.height.h_100 * 10 / 100}
        text='Mapa'
        textSize={theme.fontSizes.note}
        action={() => navigate('/map')}
      />
      <SquareButton
        url={require('../../img/open-book.png')}
        squareHeight={theme.height.h_100 * 10 / 100}
        squareWidth={theme.height.h_100 * 10 / 100}
        text='Tips'
        textSize={theme.fontSizes.note}
        action={() => navigate('/tips')}
      />
      <SquareButton
        url={require('../../img/history.png')}
        squareHeight={theme.height.h_100 * 10 / 100}
        squareWidth={theme.height.h_100 * 10 / 100}
        text='Historial'
        textSize={theme.fontSizes.note}
        action={() => navigate('/history')}
      />
      <SquareButton
        url={require('../../img/entrevista.png')}
        squareHeight={theme.height.h_100 * 10 / 100}
        squareWidth={theme.height.h_100 * 10 / 100}
        text='Contacto'
        textSize={theme.fontSizes.note}
        action={() => navigate('/contact')}
      />
    </View>)
}

const style = StyleSheet.create({
  menu: {
    height: theme.height.h_100 * 12 /100,
    width: theme.width.w_100,
    top: theme.height.h_100 * 85 / 100,
    backgroundColor: theme.colors.graySmoke,
    flexDirection: 'row',
    justifyContent: theme.align.around,
    alignItems: theme.align.center,
    position: 'absolute',
    zIndex: 1
  }
})

export default FooterMenu;