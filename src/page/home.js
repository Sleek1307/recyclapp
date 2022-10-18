import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import theme from "../assets/themes/theme";
import SquareButton from "../components/squareButton";

  return (
    <View style={{ ...style.container }}>
      <View style={{
        ...style.circleOne
      }} />
      <View style={{
        ...style.circleTwo
      }} />

      {/* Menu */}
      <View style={{
        ...style.menu
      }}>

        <Text style={{
          ...style.title
        }}>
          Menu:
        </Text>
        <View style={{
          ...style.menuRow
        }}>
          <SquareButton
            action={() => { props.navigation.navigate('Map') }}
            url={require('../../img/maps.png')}
            text={'Ver mapa'}
            squareHeight={theme.width.w_100 * 35 / 100}
            squareWidth={theme.width.w_100 * 35 / 100} />
          <SquareButton
            action={() => { props.navigation.navigate('Content') }}
            url={require('../../img/open-book.png')}
            text={'Contenido'}
            squareHeight={theme.width.w_100 * 35 / 100}
            squareWidth={theme.width.w_100 * 35 / 100} />
        </View>

        <View style={{
          ...style.menuRow
        }}>
          <SquareButton
            action={() => { props.navigation.navigate('History') }}
            url={require('../../img/history.png')}
            text={'Historial'}
            squareHeight={theme.width.w_100 * 35 / 100}
            squareWidth={theme.width.w_100 * 35 / 100} />
          <SquareButton
            action={() => { props.navigation.navigate('Contact') }}
            url={require('../../img/entrevista.png')}
            text={'Contacto'}
            squareHeight={theme.width.w_100 * 35 / 100}
            squareWidth={theme.width.w_100 * 35 / 100} />
        </View>
      </View>
    </View>
  )


const style = StyleSheet.create({
  circleOne: {
    width: theme.width.w_100,
    height: theme.width.w_100,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.width.w_100,
    left: -(theme.width.w_25),
    top: -(theme.width.w_25),
    position: 'absolute'
  },
  circleTwo: {
    width: theme.height.h_75,
    height: theme.height.h_75,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.height.h_75,
    top: theme.height.h_50,
    left: theme.width.w_25,
    position: 'absolute'
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteSmoke
  },
  menu: {
    zIndex: 1,
    flex: 1,
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
  },
  menuRow: {
    width: theme.width.w_100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: theme.align.around,
    marginVertical: theme.spacing.low
  },
  title: {
    fontSize: theme.fontSizes.title,
    color: theme.colors.black,
    textAlign: theme.align.left,
    width: theme.width.w_100 * 85 / 100,
  },
  burgerIcon: {
    width: theme.width.w_100 * 10 / 100,
    height: theme.width.w_100 * 10 / 100,
    position: 'relative',
    top: 10,
    left: 10,
  }
})

export default Home;