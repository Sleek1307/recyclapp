import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, Alert } from "react-native";

import { Layout } from "@ui-kitten/components";

import theme from "../assets/themes/theme";
import StyledInput from "../components/inputStyled";
import ButtonStyled from "../components/buttonStyled";
import StyledPassword from "../components/inputs/styledPassword";
import StyledSelect from "../components/inputs/styledSelect";

const Register = (props) => {

  return (
    <View
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
          title={'Nombre completo'}
          icon={'person'}
        />

        {/* Documento */}

        <Layout style={{
          width: '75%',
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent'
        }}>
          <StyledSelect
            data={['CC', 'TI', 'NIT']}
            width={'31%'}
          />
          <StyledInput
            title={'Numero de documento'}
            icon={'card'}
            width={'65%'}
          />

        </Layout>


        <StyledPassword
          title={'Contraseña'}
        />

        <StyledPassword
          title={'Confirmar contraseña'}
        />


        <ButtonStyled
          placeholder={'Registrarse'}
          action={() => alert('Has sido registrado')}
        />

        <TouchableOpacity
          onPress={() => {props.navigation.navigate('Signin')}}
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