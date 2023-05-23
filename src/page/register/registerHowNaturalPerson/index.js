import React from 'react';
import {View, StyleSheet, Image, ToastAndroid} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import theme from '../../../assets/themes/theme';
import Link from '../../../components/buttons/link';
import {signup} from '../../../Services/auth.services';
import CustomSelect from '../../../components/inputs/select';
import CustomInput from '../../../components/inputs/input';
import CustomPassword from '../../../components/inputs/passwords';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

const RegisterHowNaturalPerson = props => {
  const message = '*Campo obligatorio';

  const reigsterSchema = yup.object().shape({
    name: yup.string().required(message),
    lastName: yup.string().required(message),
    email: yup.string().required(message),
    phoneNumber: yup.string().required(message),
    contractNumber: yup.string().required(message),
    password: yup.string().required(message),
    supportPass: yup.string(),
  });

  const register = async values => {
    try {

      const registeredUser = await signup({
        code: values.type_document + values.document,
        name: values.name,
        lastName: values.lastName,
        social_reason: values.name + ' ' + values.lastName,
        type_document: values.type_document,
        document: values.document,
        password: values.password,
        email: values.email,
        phoneNumber: values.phoneNumber,
        contractNumber: values.contractNumber,
      });

      ToastAndroid.show(registeredUser.data.data.msg, ToastAndroid.SHORT);


      props.navigation.navigate('Signin');
    } catch (error) {
      // ToastAndroid.show(error.response.data.error, ToastAndroid.SHORT);
      console.log(error.response);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.whiteSmoke,
      }}>
      <View
        style={{
          ...style.logo,
        }}>
        <Image
          source={require('../../../../img/recyclapp-logo.png')}
          style={{
            height: 300,
            width: 300,
          }}
        />
      </View>

      {/* Formulario */}
      <Formik
        onSubmit={register}
        validationSchema={reigsterSchema}
        initialValues={{
          name: '',
          lastName: '',
          type_document: '',
          document: '',
          email: '',
          phoneNumber: '',
          contractNumber: '',
          password: '',
          supportPass: '',
        }}
        validate={values => {
          let errors = {};
          if (values.supportPass !== values.password) {
            errors.supportPass = 'Las contraseñas no coinciden';
          }
          return errors;
        }}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
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
                <CustomInput
                  placeholder={'Nombres'}
                  icon={'user'}
                  onBlur={handleBlur('name')}
                  onChangeText={handleChange('name')}
                  value={values.name}
                  error={errors.name && touched.name ? errors.name : ''}
                />

                <CustomInput
                  placeholder={'Apellidos'}
                  icon={'user'}
                  onBlur={handleBlur('lastName')}
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  error={
                    errors.lastName && touched.lastName ? errors.lastName : ''
                  }
                />

                <CustomSelect
                  name={'type_document'}
                  label={'Tipo de documento'}
                  onSelect={setFieldValue}
                  data={[
                    {
                      id: 1,
                      label: 'CC',
                    },
                    {
                      id: 2,
                      label: 'NIT',
                    },
                    {
                      id: 3,
                      label: 'TI',
                    },
                  ]}
                />

                {/* <CustomInput
                  placeholder={'Tipo de documento'}
                  icon={'user'}
                  onBlur={handleBlur('type_document')}
                  onChangeText={handleChange('type_document')}
                  value={values.type_document}
                  error={
                    errors.document && touched.type_document
                      ? errors.type_document
                      : ''
                  }
                /> */}

                <CustomInput
                  placeholder={'Numero de documento'}
                  icon={'user'}
                  onBlur={handleBlur('document')}
                  onChangeText={handleChange('document')}
                  value={values.document}
                  error={
                    errors.document && touched.document ? errors.document : ''
                  }
                />

                <CustomInput
                  placeholder={'Correo electronico'}
                  icon={'mail'}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  error={errors.email && touched.email ? errors.email : ''}
                />

                <CustomInput
                  placeholder={'Numero de telefono'}
                  icon={'phone'}
                  onBlur={handleBlur('phoneNumber')}
                  onChangeText={handleChange('phoneNumber')}
                  value={values.phoneNumber}
                  error={
                    errors.phoneNumber && touched.phoneNumber
                      ? errors.phoneNumber
                      : ''
                  }
                />

                <CustomInput
                  placeholder={'Numero de contrato'}
                  icon={'clipboard'}
                  onBlur={handleBlur('contractNumber')}
                  onChangeText={handleChange('contractNumber')}
                  value={values.contractNumber}
                  error={
                    errors.contractNumber && touched.contractNumber
                      ? errors.contractNumber
                      : ''
                  }
                />

                <CustomPassword
                  placeholder={'Contraseña'}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  error={
                    errors.password && touched.password ? errors.password : ''
                  }
                />

                <CustomPassword
                  placeholder={'Confirmar contraseña'}
                  onBlur={handleBlur('supportPass')}
                  onChangeText={handleChange('supportPass')}
                  value={values.supportPass}
                  error={
                    errors.supportPass && touched.supportPass
                      ? errors.supportPass
                      : ''
                  }
                />

                <Button title={'Registrarse'} onPress={handleSubmit} />
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
  circleOne: {
    width: theme.width.w_100 / 3,
    height: theme.width.w_100 / 3,
    backgroundColor: theme.colors.primary,
    borderBottomEndRadius: theme.width.w_100 / 3,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  circleTwo: {
    width: theme.width.w_50,
    height: theme.width.w_50,
    backgroundColor: theme.colors.terciary,
    borderRadius: theme.width.w_50,
    top: -((theme.height.h_100 / 100) * 7),
    left: theme.width.w_100 - theme.width.w_50 + (theme.width.w_100 / 100) * 7,
    position: 'absolute',
  },
  circleThree: {
    width: theme.height.h_75,
    height: theme.height.h_75,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.height.h_50,
    top: theme.height.h_100 - theme.height.h_50,
    left: -theme.height.h_50,
    position: 'absolute',
  },
  circleFour: {
    width: theme.width.w_100,
    height: theme.width.w_100,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.height.h_50,
    top: theme.height.h_25,
    left: theme.width.w_50,
    position: 'absolute',
  },
  logo: {
    flex: 1,
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
  },
  form: {
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
    paddingVertical: '10%',
  },
  register: {
    color: '#1f1f1f',
    borderColor: '#1f1f1f',
    marginVertical: theme.spacing.low,
  },
  login: {
    color: theme.colors.terciary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.regular,
    textDecorationLine: 'underline',
  },
});

export default RegisterHowNaturalPerson;
