import React from "react";
import { View } from "react-native";

import { Button, Card, Input, Text } from "@ui-kitten/components"
import Icon from "react-native-vector-icons/Ionicons"
import StyledInput from "../components/inputs/styledInput";
import StyledButton from "../components/buttons/styledButton";
import Link from "../components/buttons/link";

import * as yup from 'yup'

import { Formik } from "formik";
import Error from "../components/inputs/errorLabel";

const RestorePassword = (props) => {

  const restoreSchema = yup.object().shape({
    email: yup.string()
      .required('El campo correo no puede estar vacio')
      .email('Formato de email invalido')
  })

  const restorePassword = (values) => {
    console.log(values);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}
      >
        <Icon
          name="alert-circle-outline"
          size={70}
          style={{ textAlign: "center" }}
        />
        <Text
          style={{
            textAlign: "center"
          }}
        >
          Si olvidaste tu cotraseña, danos tu email y allí te enviaremos las instrucciones para restaurarla.
        </Text>


        <Formik
          initialValues={{
            email: ''
          }}
          validationSchema={restoreSchema}
          onSubmit={restorePassword}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
            return (
              <View style={{ alignItems: 'center' }}>
                <StyledInput title='Email' onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                {errors.email && touched.email ? <Error error={errors.email} /> : null}
                <StyledButton placeholder='Enviar' action={handleSubmit} />
                <Link text={'Iniciar sesion'} action={() => props.navigation.navigate('Signin')} />
              </View>
            )
          }}

        </Formik>

      </Card>
    </View >
  )
}

export default RestorePassword