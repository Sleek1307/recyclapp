import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableWithoutFeedback } from "react-native";

import MenuTabs from "./MenuTaps";
import Profile from "../src/page/profile";
import { default as theme } from "./../src/assets/themes/custom-theme.json"

const Drawer = createDrawerNavigator();

const HomeDrawer = (props) => {
  return (
    <Drawer.Navigator initialRouteName="Home" 
    screenOptions={{
      drawerActiveTintColor: theme["color-primary-700"],
      headerRight: () => {
        return (
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Signin')}
          >
            <Icon name="exit-outline" size={30} color={'#000000'} style={{ marginEnd: 15 }} />
          </TouchableWithoutFeedback>
        )
      },
      headerShadowVisible: false,
      headerTransparent: true
    }}>
      <Drawer.Screen name="Home" component={MenuTabs} options={{
        drawerLabel: 'Inicio',
        headerTitle: 'Inicio'
      }} />
      <Drawer.Screen name="Profile" component={Profile} options={{
        headerTransparent: true,
        drawerLabel: 'Perfil',
        headerTitle: 'Perfil'
      }} />
    </Drawer.Navigator>
  )
}

export default HomeDrawer;