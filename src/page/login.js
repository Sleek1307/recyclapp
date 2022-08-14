import React from "react";
import { View, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Dimensions } from "react-native";
import { useNavigate } from "react-router-native";
import StyledInput from "../components/inputStyled";
import ButtonStyled from "../components/buttonStyled";
import theme from "../theme";

const window = Dimensions.get('window');

const Login = () => {

  const navigate = useNavigate();

  return (
    <View style={{
      ...style.container
    }}>

      <View style={{
        ...style.logo
      }}
      >
        <Image source={require('../../img/RECYCLAPP.LOGO.2.png')}
          style={{
            height: 350,
            width: 350
          }} />
      </View>

      <View style={{
        ...style.form,
        zIndex: 2
      }}>
        <Text style={{
          marginBottom: theme.spacing.low,
          fontSize: theme.fontSizes.title,
          color: theme.colors.black,
          fontWeight: theme.fontWeights.semiBold
        }}>
          Inicio de sesion
        </Text>
        <StyledInput placeholder={{
          text: 'Usuario',
          color: '#7d7d7d'
        }} />
        <StyledInput placeholder={{
          text: 'Contraseña',
          color: '#7d7d7d'
        }} />
        <View>
          <TouchableHighlight
            underlayColor={theme.colors.dark}
            style={{
              marginVertical: theme.spacing.low
            }}
          >
            <Text style={{
              color: theme.colors.terciary,
              fontWeight: theme.fontWeights.regular,
              fontSize: theme.fontSizes.body,
              textDecorationLine: 'underline'
            }}>
              Restaurar contraseña
            </Text>
          </TouchableHighlight>
        </View>
        <ButtonStyled
          text={'Login'}
          style={{
            color: '#1f1f1f',
            borderColor: '#1f1f1f',
          }}
          action={
            () => navigate('home')
          }
        />
        <TouchableOpacity
          underlayColor={theme.colors.dark}
          onPress={() => { navigate('/register') }}
          style={{
            marginTop: theme.spacing.low
          }}
        >
          <Text
            style={{
              color: theme.colors.terciary,
              fontSize: theme.fontSizes.body,
              fontWeight: theme.fontWeights.regular,
              textDecorationLine: 'underline',
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
    height: theme.height.h_100 / 100 * 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: theme.height.h_100 * 40 / 100,
    width: theme.width.w_100,
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
    backgroundColor: theme.colors.secondary,
    borderBottomStartRadius: window.width * 15 / 100,
    borderBottomEndRadius: window.width * 15 / 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 4,
  }
})

export default Login;