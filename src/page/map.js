import React from "react";
import { ImageBackground, Image, StyleSheet, View, Text, Dimensions } from "react-native";

import { Button } from "@ui-kitten/components";

import theme from "../assets/themes/theme";
import StyledButton from "../components/buttons/styledButton";

const width = theme.width.w_100;
const height = theme.height.h_100

const Map = () => {
  return (
    <View
      style={{
        ...style.container
      }}
    >
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
      <View style={{ ...style.map }}>
        <View
          style={{
            flex: 1,
            zIndex: 1,
          }}
        >
          <ImageBackground
            source={require('./../../img/map.png')}
            style={{
              alignSelf: "stretch",
              justifyContent: "flex-end",
              alignItems: "center",
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0
            }}
          >

            <View
              style={{
                ...style.card
              }}
            >
              <StyledButton
                placeholder={'Hola mundo'}
                icon={'add-circle'}
                iconColor='#fafafa'
              />
            </View>


          </ImageBackground>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    height: height / 3,
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
  },
  map: {
    position: 'absolute',
    top: theme.height.h_25,
    bottom: 0,
    width: theme.width.w_100,
    backgroundColor: theme.colors.whiteSmoke
  },
  card: {
    borderRadius: 15,
    marginBottom: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Map; 