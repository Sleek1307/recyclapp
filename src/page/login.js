import React from "react";
import { View, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Dimensions } from "react-native";

import StyledInput from "../components/inputStyled";
import ButtonStyled from "../components/buttonStyled";
import theme from "../assets/themes/theme";
import {default as mainTheme} from './../assets/themes/custom-theme.json'

import StyledPassword from "../components/inputs/styledPassword";

const window = Dimensions.get('window');

const Login = (props) => {

  return (
    <View style={{
      ...style.container
    }}>

      <View
        style={{
          ...style.logo
        }}
      >
        <Image source={require('../../img/RECYCLAPP.LOGO.2.png')}
          style={{
            height: 350,
            width: 350
          }} />
      </View>

      <View
        style={{
          ...style.form,
        }}>
        <StyledInput
          title={'Usuario'}
          icon='person'
        />
        <StyledPassword
          title={'Contraseña'}
        />

        {/* Restaurar contraseña */}
        <TouchableOpacity
          underlayColor={theme.colors.dark}
          onPress={() => {props.navigation.navigate('Restore')}}
        >
          <Text style={{
             color: mainTheme["color-primary-600"],
            fontWeight: theme.fontWeights.regular,
            fontSize: theme.fontSizes.body,
            textDecorationLine: 'underline'
          }}>
            Restaurar contraseña
          </Text>
        </TouchableOpacity>

        {/* Inicio de sesion */}
        <ButtonStyled
          placeholder={'Login'}
          action={
            () => {props.navigation.navigate('Initial')}
          }
        />
        {/*Registrar contraseña */}
        <TouchableOpacity
          underlayColor={theme.colors.dark}
          onPress={() => props.navigation.navigate('Register')}
        >
          <Text
            style={{
              ...style.link
            }}>
            Registrarse
          </Text>

        </TouchableOpacity>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
    backgroundColor: theme.colors.secondary,
    borderBottomStartRadius: window.width * 15 / 100,
    borderBottomEndRadius: window.width * 15 / 100,
    shadowColor: "#000",
    elevation: 4,
  },
  link: {
    color: mainTheme["color-primary-600"],
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.regular,
    textDecorationLine: 'underline',
  }
})

export default Login;