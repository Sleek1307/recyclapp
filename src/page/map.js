import React from "react";
import { ImageBackground, Image, StyleSheet, View, Text } from "react-native";

import { Button } from "@ui-kitten/components";
import Icon from 'react-native-vector-icons/Ionicons'

import theme from "../assets/themes/theme";

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
      <View style={{ ...style.spacing }} />
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
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <View style={{ ...style.card }}>
              <Button
                status={"primary"}
                accessoryLeft={({color}) => {
                  return < Icon name="add-circle" color={'#fafafa'} size={30}/>
                }}
              >
                Nuevo servicio
              </Button>
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
    flex: 1,
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
  spacing: {
    flex: 2,
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
    marginBottom: '25%',
  }
})

export default Map; 