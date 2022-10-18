import React from "react";
import { View, Image, StyleSheet, TouchableHighlight, TouchableOpacity, Dimensions } from "react-native";

import theme from "../assets/themes/theme";
import { default as mainTheme } from '../assets/themes/custom-theme.json';
import { Formik } from 'formik';
import * as yup from 'yup';

import StyledInput from "../components/inputs/styledInput";
import StyledPassword from "../components/inputs/styledPassword";
import StyledButton from "../components/buttons/styledButton";
import Error from "../components/inputs/errorLabel";
import Link from "../components/buttons/link";

const window = Dimensions.get('window');

const Login = (props) => {

  const loginSchema = yup.object().shape({
    user: yup.string()
      .required('El campo usuario no puede estar vacio'),
    password: yup.string()
      .required('El campo contraseña no puede estar vacio').
      min(8, 'La contraseña debe tener al menos 8 caracteres')
  })

  const login = (values) => {
    props.navigation.navigate('Initial')
  }

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
      <Formik
        initialValues={{
          user: '',
          password: ''
        }}
        validationSchema={loginSchema}
        onSubmit={login}
      // validate={validate}
      >
        {({ handleChange, handleBlur, values, errors, touched, handleSubmit }) => {
          return (
            <View
              style={{
                ...style.form
              }}
            >
              <StyledInput
                title={'Usuario'}
                icon='person'
                onChangeText={handleChange('user')}
                onBlur={handleBlur('user')}
                value={values.user}
              />
              {errors.user && touched.user ? <Error error={errors.user} /> : null}
              <StyledPassword
                title={'Contraseña'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {errors.password && touched.password ? <Error error={errors.password} /> : null}
              {/* Restaurar contraseña */}
              <View
                style={{
                  width: '100%',
                  marginEnd: 20,
                  alignItems: 'flex-end',
                }}
              >
                <Link text={'Restaurar contraseña'} action={() => props.navigation.navigate('Restore')} />
              </View>

              {/* Inicio de sesion */}
              <StyledButton
                placeholder={'Iniciar sesion'}
                action={() => props.navigation.navigate('Initial')}
              />
              {/*Registrarse */}

              <Link text={'Registrarse'} action={() => props.navigation.navigate('Register')} />
            </View>
          )
        }}
      </Formik>
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
    paddingHorizontal: '12.5%'
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