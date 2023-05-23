import {Formik} from 'formik';
import React from 'react';
import {View, StyleSheet, ScrollView, Text, ToastAndroid} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';

import * as yup from 'yup';

import CustomInput from '../components/inputs/input';
import Error from '../components/inputs/errorLabel';
import Avatar from '../components/cards/avatar';
import {
  createAddress,
  updateAddress,
  updateUserData,
} from '../Services/user.service';
import {getUserData} from '../Services/user.service';
import theme from '../assets/themes/theme';
import {useEffect} from 'react';
import {useState} from 'react';

const Profile = props => {
  const user = props.response_login.user;
  const [initialValues, setInitialValues] = useState(null);
  const roles = {
    1: 'Administrador',
    2: 'Moderador',
    3: 'Origen',
  };

  const requiredMessage = '*Campo obligatorio';
  const profileSchema = yup.object().shape({
    road: yup.string().required(requiredMessage),
    streetNumber: yup.string().required(requiredMessage),
    houseNumber: yup.string().required(requiredMessage),
    note: yup.string(),
  });

  const getUserEditableData = async token => {
    try {
      const response = await getUserData(token);
      const {contractNumber, email, name, lastName, phoneNumber} =
        response.data.user;

      setInitialValues({
        contractNumber: contractNumber,
        email: email,
        name: name,
        lastName: lastName,
        phoneNumber: phoneNumber,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const editProfile = async (values, token) => {
    // if (user.address === null) {
    //   try {
    //     await createAddress({ data: { ...values, userId: user.id } }, props.response_login.token);
    //     ToastAndroid.show('Direccion actualizada correctamente', ToastAndroid.SHORT)
    //   } catch (error) {
    //     console.log(error.response);
    //   }
    // } else {
    //   try {
    //     await updateAddress({ data: { ...values } }, user.address.id, props.response_login.token);
    //     ToastAndroid.show('Direccion actualizada correctamente', ToastAndroid.SHORT);
    //   } catch (error) {
    //     console.log(error.response);
    //     // ToastAndroid.show(error.response.data.msg)
    //   }
    // }

    console.log('Estas actualizando tu usuario..');
    try {
      await updateUserData(values, token);
      ToastAndroid.show(
        'Usuario actualizado correctamente',
        ToastAndroid.SHORT,
      );
      getUserData(props.response_login.token);
    } catch (error) {
      ToastAndroid.show(
        'Algo ha ido mal, intentalo mas tarde',
        ToastAndroid.SHORT,
      );
    }
  };

  useEffect(() => {
    getUserEditableData(props.response_login.token);
  }, []);

  return (
    <>
      <View style={style.container}>
        <View style={style.avatarContainer}>
          <Avatar image={require('../../img/JULIAN.png')} />
          <View style={style.avatarInfo}>
            <Text
              style={{
                ...style.avatarTitle,
              }}>
              {user.name}
            </Text>
            <Text style={style.avatarSubtitle}>{user.email}</Text>
            <Text style={style.avatarSubtitle}>{roles[user.rol]}</Text>
          </View>
        </View>

        <View style={style.formContainer}>
          <View style={style.form}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {initialValues !== null && (
                <Formik
                  initialValues={initialValues}
                  onSubmit={values => {
                    console.log('Modificando');
                    editProfile(values, props.response_login.token);
                  }}
                  // validationSchema={profileSchema}
                >
                  {({
                    errors,
                    values,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                  }) => {
                    return (
                      <View
                        disabled={true}
                        style={{
                          justifyContent: theme.align.center,
                          alignItems: theme.align.center,
                        }}>
                        <CustomInput
                          placeholder={'Nombres'}
                          icon={'user'}
                          onBlur={handleBlur('name')}
                          onChangeText={handleChange('name')}
                          value={values.name}
                        />
                        {errors.name && touched.name ? (
                          <Error error={errors.name} />
                        ) : null}

                        <CustomInput
                          placeholder={'Apellidos'}
                          icon={'user'}
                          onBlur={handleBlur('lastNames')}
                          onChangeText={handleChange('lastNames')}
                          value={values.lastName}
                        />
                        {errors.lastName && touched.lastName ? (
                          <Error error={errors.lastName} />
                        ) : null}

                        <CustomInput
                          placeholder={'Correo electronico'}
                          icon={'mail'}
                          onBlur={handleBlur('email')}
                          onChangeText={handleChange('email')}
                          value={values.email}
                        />
                        {errors.email && touched.email ? (
                          <Error error={errors.email} />
                        ) : null}

                        <CustomInput
                          placeholder={'Numero de telefono'}
                          icon={'phone'}
                          onBlur={handleBlur('phoneNumber')}
                          onChangeText={handleChange('phoneNumber')}
                          value={values.phoneNumber}
                        />
                        {errors.phoneNumber && touched.phoneNumber ? (
                          <Error error={errors.phoneNumber} />
                        ) : null}

                        {/* <CustomInput
                        placeholder={'Direccion'}
                        icon={'home'}
                        onBlur={handleBlur('address')}
                        onChangeText={handleChange('address')}
                        value={values.name}
                      />
                      {errors.houseNumber && touched.streetNumber ? (
                        <Error error={errors.houseNumber} />
                      ) : null} */}

                        <CustomInput
                          placeholder={'Numero de contrato'}
                          icon={'file-text'}
                          onBlur={handleBlur('contractNumber')}
                          onChangeText={handleChange('contractNumber')}
                          value={values.contractNumber}
                        />
                        {errors.contractNumber && touched.contractNumber ? (
                          <Error error={errors.contractNumber} />
                        ) : null}

                        {/* <TextArea
                          title={'Agrega una nota que describa tu casa'}
                          onBlur={handleBlur('note')}
                          onChangeText={handleChange('note')}
                          value={values.note}
                          lines={6}
                        />
                        {errors.note && touched.note ? <Error error={errors.note} /> : null} */}
                        <Button onPress={handleSubmit} title="Modificar" />
                      </View>
                    );
                  }}
                </Formik>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    width: '100%',
    flex: 0.5,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    flex: 1,
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
    backgroundColor: theme.colors.secondary,
    borderBottomStartRadius: (theme.width.w_100 * 15) / 100,
    borderBottomEndRadius: (theme.width.w_100 * 15) / 100,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 4,
  },
  formContainer: {
    flex: 0.5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    position: 'absolute',
    backgroundColor: theme.colors.white,
    width: '80%',
    height: '100%',
    borderRadius: 20,
    top: '-10%',
    elevation: 5,
    padding: 5,
  },
  avatarInfo: {
    alignItems: 'center',
  },
  avatarTitle: {
    fontFamily: theme.fonts.baloo.semiBold,
    fontSize: theme.fontSizes.subTitle,
  },
  avatarSubtitle: {
    fontFamily: theme.fonts.baloo.regular,
    fontSize: theme.fontSizes.note,
  },
});

const mapStateToProps = state => {
  return {...state.authReducer};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
