import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../src/page/login';
import RestorePassword from '../src/page/restore';
import CreateService from '../src/page/createService';

import MainDrawer from './MainDrawerStack';
import Stats from '../src/page/stats';
import theme from '../src/assets/themes/theme';
import RegisterHowNaturalPerson from '../src/page/register/registerHowNaturalPerson';
import RegisterHowJuridicPerson from '../src/page/register/registerHowJuridicPerson';

const Stack = createNativeStackNavigator();

const SignStack = () => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Signin"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={RegisterHowNaturalPerson}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Restore"
        component={RestorePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={MainDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateService"
        component={CreateService}
        options={{
          headerTransparent: true,
          headerTitle: 'Solicitar recogida',
          headerTintColor: theme.colors.gray,
        }}
      />

      <Stack.Screen
        name="Stats"
        component={Stats}
        options={{
          headerTransparent: true,
          headerTitle: 'Tus estadisticas',
          headerTintColor: theme.colors.gray,
        }}
      />
      {/* 
      <Stack.Screen name="Article" component={ArticleViewMore} />
      <Stack.Screen name="Service" component={Service} />
      */}
    </Stack.Navigator>
  );
};

export default SignStack;
