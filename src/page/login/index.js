import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Dimensions, ToastAndroid} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';

import theme from '../../assets/themes/theme';
import Link from '../../components/buttons/link';
import {fetch_login} from '../../../redux/actions/auth.actions';

import CustomInput from '../../components/inputs/input';
import CustomPassword from '../../components/inputs/passwords';
import CustomSelect from '../../components/inputs/select';

const window = Dimensions.get('window');

const Login = props => {
  useEffect(() => {
    if (props.error) {
      const {error} = props;
      ToastAndroid.show(error.error, ToastAndroid.SHORT);
      return;
    }

    if (props.response_login) {
      const user = props.response_login.user;

      if (user.state) {
        ToastAndroid.show('¡Bienvenido!', ToastAndroid.SHORT);
        props.navigation.navigate('Main');
      } else {
        ToastAndroid.show('Por favot verifica tu cuenta', ToastAndroid.SHORT);
      }
    }
  }, [props.response_login, props.error]);

  const loginSchema = yup.object().shape({
    document: yup
      .string()
      .required('El documento de identificacion no puede estar vacio'),
    password: yup
      .string()
      .required('El la contraseña no puede estar vacia')
      .min(8, 'La contraseña debe tener al menos 8 caracteres'),
  });

  const login = async values => {
    props.fetch_login({
      code: values.type_document + values.document,
      password: values.password,
    });
  };

  return (
    <View
      style={{
        ...style.container,
      }}>
      <View
        style={{
          ...style.logo,
        }}>
        <Image
          source={require('../../../img/recyclapp-logo.png')}
          style={{
            height: '75%',
            width: '60%',
          }}
        />
      </View>
      <Formik
        initialValues={{
          document: '',
          password: '',
          type_document: '',
        }}
        validationSchema={loginSchema}
        onSubmit={login}>
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          handleSubmit,
          setFieldValue,
        }) => {
          return (
            <View
              style={{
                ...style.form,
              }}>
              <CustomSelect
                name={'type_document'}
                label={'Tipo de documento'}
                onSelect={setFieldValue}
                data={[
                  {id: 0, label: 'Tipo de documento', value: null},
                  {
                    id: 1,
                    label: 'CEDULA DE CIUDADANIA',
                    value: 'CC',
                  },
                  {
                    id: 3,
                    label: 'TARJETA DE IDENTIFICACION',
                    value: 'TI',
                  },
                  {
                    id: 2,
                    label: 'NIT',
                    value: 'NIT',
                  },
                ]}
              />
              <CustomInput
                placeholder={'Documento de identificacion'}
                icon={'mail'}
                onChangeText={handleChange('document')}
                onBlur={handleBlur('document')}
                value={values.document}
                error={
                  errors.document && touched.document ? errors.document : ''
                }
              />
              <CustomPassword
                placeholder={'Contraseña'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={
                  errors.password && touched.password ? errors.password : ''
                }
              />
              {/* Inicio de sesion */}
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                <Link
                  text={'Restaurar contraseña'}
                  action={() => props.navigation.navigate('Restore')}
                />
              </View>
              <Button title={'Iniciar sesion'} onPress={handleSubmit} />
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Link
                  text={'Registrarse'}
                  action={() => props.navigation.navigate('Register')}
                />
              </View>
              {/*Registrarse */}
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
    zIndex: 4,
  },
  logo: {
    flex: 1,
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
    backgroundColor: theme.colors.secondary,
    borderBottomStartRadius: (window.width * 15) / 100,
    borderBottomEndRadius: (window.width * 15) / 100,
    shadowColor: '#000',
    // elevation: 4,
  },
});

const mapStateToProps = state => {
  return {...state.authReducer};
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_login: values => dispatch(fetch_login(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
