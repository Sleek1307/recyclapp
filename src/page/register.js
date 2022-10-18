import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { Layout } from "@ui-kitten/components";
import { Formik } from "formik";
import * as yup from 'yup';

import theme from "../assets/themes/theme";
import StyledInput from "../components/inputs/styledInput";
import StyledButton from "../components/buttons/styledButton";
import StyledPassword from "../components/inputs/styledPassword";
import StyledSelect from "../components/inputs/styledSelect";
import Link from "../components/buttons/link";
import Error from "../components/inputs/errorLabel";


const Register = (props) => {

  const reigsterSchema = yup.object().shape({
    names: yup.string().required('El campo nombres no puede estar vacio'),
    lastNames: yup.string().required('El campo apellidos no puede estar vacio'),
    document: yup.string().required('El campo documento no puede estar vacio'),
    password: yup.string().required('El campo contrasela no puede estar vacio'),
    supportPass: yup.string()
  })

  const register = (values) => {
    console.log(values);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.whiteSmoke
      }}>
      {/* Lunares */}
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
      <Formik
        onSubmit={register}
        validationSchema={reigsterSchema}
        initialValues={{
          names: '',
          lastNames: '',
          document: '',
          password: '',
          supportPass: ''
        }}
        validate={(values) => {
          let errors = {};

          if (values.supportPass !== values.password) {
            errors.supportPass = 'Las contraseñas no coinciden'
          }

          return errors
        }}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => {
          return (
            <View style={{
              ...style.form
            }}>
              <StyledInput
                title={'Nombres'}
                icon={'person'}
                onBlur={handleBlur('names')}
                onChangeText={handleChange('names')}
                value={values.names}
              />
              {errors.names && touched.names ? <Error error={errors.names} /> : null}
              <StyledInput
                title={'Apellidos'}
                icon={'person'}
                onBlur={handleBlur('lastNames')}
                onChangeText={handleChange('lastNames')}
                value={values.lastNames}
              />
              {errors.lastNames && touched.lastNames ? <Error error={errors.lastNames} /> : null}

              {/* Documento */}

              <Layout style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'transparent',
                width: '100%'
              }}>
                <StyledSelect
                  data={['CC', 'TI', 'NIT']}
                  width={'31%'}
                />
                <StyledInput
                  title={'Numero de documento'}
                  icon={'card'}
                  width={'65%'}
                  onBlur={handleBlur('document')}
                  onChangeText={handleChange('document')}
                  value={values.document}
                />
              </Layout>
              {errors.document && touched.document ? <Error error={errors.document} /> : null}


              <StyledPassword
                title={'Contraseña'}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                value={values.password}
              />
              {errors.password && touched.password ? <Error error={errors.password} /> : null}

              <StyledPassword
                title={'Confirmar contraseña'}
                onBlur={handleBlur('supportPass')}
                onChangeText={handleChange('supportPass')}
                value={values.supportPass}
              />
              {errors.supportPass && touched.supportPass ? <Error error={errors.supportPass} /> : null}

              <StyledButton
                placeholder={'Registrarse'}
                action={handleSubmit}
              />

              <Link text={'Iniciar sesion'} action={() => { props.navigation.navigate('Signin') }} />
            </View>)
        }}
      </Formik>

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
    alignItems: theme.align.center,
    paddingHorizontal: '12.5%'
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