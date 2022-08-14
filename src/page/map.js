import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FooterMenu from "../components/footerMenu";
import HomeButton from "../components/homeButton";
import theme from "../theme";

const Map = () => {

  return (
    <View>
      <View style={{
        ...style.profile
      }}>
        <Image
          source={require('../../img/user.png')}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </View>
      <View style={{
        ...style.map
      }}>
      </View>
      <HomeButton/>
      <FooterMenu />
    </View>
  )
}

const style = StyleSheet.create({
  profile: {
    height: theme.height.h_100 * 40 / 100,
    width: theme.width.w_100,
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
    backgroundColor: theme.colors.secondary,
    borderBottomStartRadius: theme.width.w_100 * 15 / 100,
    borderBottomEndRadius: theme.width.w_100 * 15 / 100,
    zIndex: 1,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 4,
    top: 0,
    position: 'absolute'
  },
  map: {
    height: theme.height.h_100 * 70 / 100,
    width: theme.width.w_100,
    backgroundColor: theme.colors.whiteSmoke,
    position: 'absolute',
    top: (theme.height.h_100 * 30 / 100),
  }
})

export default Map;