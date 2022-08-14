import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import theme from "../theme";
import StyledInput from "../components/inputStyled";
import ButtonStyled from "../components/buttonStyled";
import { useNavigate } from "react-router-native";

const Register = () => {

  const navigate = useNavigate();

  return (<View
    style={{
      flex: 1,
      backgroundColor: theme.colors.whiteSmoke
    }}>
    {/* Lunares */}
    <View style={{
      ...style.circleOne
    }} />
    <View style={{
      ...style.circleTwo
    }} />
    <View style={{
      ...style.circleThree
    }} />
    <View style={{
      ...style.circleFour
    }} />

    {/* Logo */}
    <View style={{
      ...style.logo
    }}>
      <Image source={require('../../img/RECYCLAPP.LOGO.2.png')}
        style={{
          height: 350,
          width: 350
        }} />
    </View>

    {/* Formulario */}
    <View style={{
      ...style.form
    }}>
      <StyledInput
        placeholder={{
          text: 'Nombre completo',
          color: theme.colors.dark
        }}
      />
      <StyledInput
        placeholder={{
          text: 'Tipo de documento',
          color: theme.colors.dark,
        }}
      />
      <StyledInput
        placeholder={{
          text: 'N° de documento',
          color: theme.colors.dark,
        }}
      />
      <StyledInput
        placeholder={{
          text: 'Contraseña',
          color: theme.colors.dark,
        }}
      />
      <StyledInput
        placeholder={{
          text: 'Confirma contraseña',
          color: theme.colors.dark,
        }}
      />
      <ButtonStyled
        text={'Registrar'}
        style={{
          ...style.register
        }}
      />

      <TouchableOpacity
        onPress={() => { navigate('/') }}
      >
        <Text style={{
          ...style.login
        }}>
          Iniciar sesion
        </Text>
      </TouchableOpacity>
    </View>
  </View>)
}

const style = StyleSheet.create({
  circleOne: {
    width: theme.width.w_100 / 3,
    height: theme.width.w_100 / 3,
    backgroundColor: theme.colors.primary,
    borderBottomEndRadius: theme.width.w_100 / 3,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  circleTwo: {
    width: theme.width.w_50,
    height: theme.width.w_50,
    backgroundColor: theme.colors.terciary,
    borderRadius: theme.width.w_50,
    top: -(theme.height.h_100 / 100 * 7),
    left: ((theme.width.w_100 - theme.width.w_50) + theme.width.w_100 / 100 * 7),
    position: 'absolute'
  },
  circleThree: {
    width: theme.height.h_75,
    height: theme.height.h_75,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.height.h_50,
    top: (theme.height.h_100 - theme.height.h_50),
    left: -(theme.height.h_50),
    position: 'absolute',
  },
  circleFour: {
    width: theme.width.w_100,
    height: theme.width.w_100,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.height.h_50,
    top: theme.height.h_25,
    left: theme.width.w_50,
    position: 'absolute'
  },
  logo: {
    height: theme.height.h_100 / 100 * 40,
    width: theme.width.w_100,
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
  },
  form: {
    flex: 1,
    zIndex: 1,
    height: theme.height.h_100 / 100 * 60,
    width: theme.width.w_100,
    justifyContent: theme.align.center,
    alignItems: theme.align.center
  },
  register: {
    color: '#1f1f1f',
    borderColor: '#1f1f1f',
    marginVertical: theme.spacing.low
  },
  login: {
    color: theme.colors.terciary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.regular,
    textDecorationLine: 'underline'
  }
})

export default Register