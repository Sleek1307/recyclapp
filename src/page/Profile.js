import { Card, Text } from "@ui-kitten/components";
import { Formik } from "formik";
import React, { useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";

import { AirbnbRating } from "react-native-ratings";
import * as yup from 'yup';

import theme from "../assets/themes/theme";
import Link from "../components/buttons/link";
import StyledButton from "../components/buttons/styledButton";
import StyledInput from "../components/inputs/styledInput";
import Error from "../components/inputs/errorLabel"
const height = theme.height.h_100

const Profile = (props) => {

  const rating = 2;

  const profileSchema = yup.object().shape({
    district: yup.string().required('El campo barrio no puede estar vacio'),
    address: yup.string().required('El campo direccion no puede estar vacio'),
    email: yup.string().required('El campo email no puede estar vacio').email('Debe ser un email valido'),
    phone: yup.number().required('EL campo numero no puede estar vacio').typeError('El campo numero no puede tener letras')
  })

  const editProfile = (values) => {
    console.log(values)
  }

  const dinamicColor = (ratingValue) => {
    if (ratingValue <= 2) {
      return "red"
    } else if (ratingValue <= 4) {
      return 'yellow'
    } else {
      return 'green'
    }
  }

  return (
    <>
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{
          ...style.profile
        }}>
          <Image
            source={require('../../img/user.png')}
            style={{
              width: 150,
              height: 150,
            }}
          />
        </View>

        <View
          style={{
            flex: 2,
            borderRadius: 15,
            overflow: 'hidden'
          }}
        >
          <View style={{
            flex: 1,
            margin: 20,
            borderRadius: 15,
            overflow: 'hidden'
          }}>
            <ScrollView
              contentContainerStyle={{
                borderRadius: 15,
              }}
              showsVerticalScrollIndicator={false}
            >
              <Formik
                initialValues={{
                  district: '',
                  address: '',
                  email: '',
                  phone: ''
                }}
                validationSchema={profileSchema}
                onSubmit={editProfile}
              >

                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => {
                  return (
                    <Card
                      style={{
                        borderRadius: 20,
                        marginVertical: 5
                      }}
                      touchSoundDisabled
                    >
                      <View>
                        <Text
                          category="label"
                        >
                          Direccion
                        </Text>
                        <StyledInput
                          title={'Direccion'}
                          value={values.address}
                          onBlur={handleBlur('address')}
                          onChangeText={handleChange('address')}
                        />
                        {errors.address && touched.address ? <Error error={errors.address} /> : null}
                        <StyledInput
                          title={'Barrio'}
                          value={values.district}
                          onBlur={handleBlur('district')}
                          onChangeText={handleChange('district')}
                        />
                        {errors.district && touched.district ? <Error error={errors.district} /> : null}
                      </View>

                      <View>
                        <Text
                          category="label"
                        >
                          Contacto
                        </Text>
                        <StyledInput
                          title={'Email'}
                          value={values.email}
                          onBlur={handleBlur('email')}
                          onChangeText={handleChange('email')}
                        />
                        {errors.email && touched.email ? <Error error={errors.email} /> : null}
                        <StyledInput
                          title={'Telefono'}
                          value={values.phone}
                          onBlur={handleBlur('phone')}
                          onChangeText={handleChange('phone')}
                        />
                        {errors.phone && touched.phone ? <Error error={errors.phone} /> : null}
                      </View>

                      <View
                        style={{
                          width: '100%',
                          alignItems: 'center'
                        }}
                      >
                        <StyledButton placeholder={'Guardar cambios'} action={handleSubmit} />

                      </View>

                      <View
                        style={{
                          width: '100%',
                        }}
                      >
                        <Link
                          text={'Cambiar contraseña'}
                        />
                      </View>
                    </Card>
                  )
                }}

              </Formik>
              <Card
                style={{
                  borderRadius: 20,
                  marginVertical: 5
                }}
                touchSoundDisabled
              >
                <Text
                  category="h2"
                  style={{
                    fontWeight: '200'
                  }}
                >
                  Calificacion:
                </Text>

                <AirbnbRating
                  defaultRating={rating}
                  isDisabled
                  reviewColor={dinamicColor(rating)}
                  selectedColor={dinamicColor(rating)}
                />
              </Card>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  profile: {
    flex: 1,
    justifyContent: theme.align.center,
    alignItems: theme.align.center,
    backgroundColor: theme.colors.secondary,
    borderBottomStartRadius: theme.width.w_100 * 15 / 100,
    borderBottomEndRadius: theme.width.w_100 * 15 / 100,
    zIndex: 1,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 4,
  },
})

export default Profile;