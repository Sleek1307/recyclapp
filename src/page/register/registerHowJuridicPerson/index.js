import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, View, Image, ToastAndroid} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import * as yup from 'yup';

import theme from '../../../assets/themes/theme';
import Link from '../../../components/buttons/link';
import CustomInput from '../../../components/inputs/input';
import CustomPassword from '../../../components/inputs/passwords';
import {signup} from '../../../Services/auth.services';

const RegisterHowJuridicPerson = props => {
  const message = '*Campo obligatorio';

  const reigsterSchema = yup.object().shape({
    nit: yup.string().required(message),
    socialReason: yup.string().required(message),
    email: yup.string().required(message),
    phoneNumber: yup.string().required(message),
    password: yup.string().required(message),
  });

  const register = async values => {
    try {
      const registeredUser = await signup();
    } catch (error) {
      ToastAndroid.show(error.response.data.error, ToastAndroid.SHORT);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.whiteSmoke,
      }}>
      <Formik>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          return (
            <View
              style={{
                flex: 1,
                paddingHorizontal: '12.5%',
              }}>
              <ScrollView
                contentContainerStyle={{
                  ...style.form,
                }}>
                <CustomInput placeholder={'NIT'} icon={'user'} />
                <CustomInput placeholder={'Razon social'} icon={'user'} />
                <CustomInput placeholder={'Correo electronico'} icon={'mail'} />
                <CustomInput
                  placeholder={'Numero de telefono'}
                  icon={'phone'}
                />
                <CustomPassword placeholder={'Contraseña'} />
                <CustomPassword placeholder={'Confirmar contraseña'} />
                <Button title={'Registrarse'} />
                <Link
                  text={'Iniciar sesion'}
                  action={() => {
                    props.navigation.navigate('Signin');
                  }}
                />
              </ScrollView>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
    paddingVertical: '10%',
  },
});

export default RegisterHowJuridicPerson;
