import React from 'react';
import {View, Text} from 'react-native';

import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Link from '../../components/buttons/link';

import * as yup from 'yup';

import {Formik} from 'formik';
import Error from '../../components/inputs/errorLabel';
import CustomInput from '../../components/inputs/input';

const RestorePassword = props => {
  const restoreSchema = yup.object().shape({
    email: yup
      .string()
      .required('El campo correo no puede estar vacio')
      .email('Formato de email invalido'),
  });

  const restorePassword = values => {
    console.log(values);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Card
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}>
        <Icon
          name="alert-circle-outline"
          size={70}
          style={{textAlign: 'center'}}
        />
        <Text
          style={{
            textAlign: 'center',
          }}>
          Si olvidaste tu cotraseña, danos tu email y allí te enviaremos las
          instrucciones para restaurarla.
        </Text>

        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={restoreSchema}
          onSubmit={restorePassword}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => {
            return (
              <View style={{alignItems: 'center'}}>
                <CustomInput
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={errors.email && touched.email ? errors.email : ''}
                  icon={'mail'}
                />
                <Button title="Enviar" onPress={handleSubmit} />
                <Link
                  text={'Iniciar sesion'}
                  action={() => props.navigation.navigate('Signin')}
                />
              </View>
            );
          }}
        </Formik>
      </Card>
    </View>
  );
};

export default RestorePassword;
