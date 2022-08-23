import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { default as theme } from "./../src/assets/themes/custom-theme.json";
import Icon from 'react-native-vector-icons/Ionicons'

import Map from "../src/page/map";
import History from "../src/page/history";
import Contact from "../src/page/contact";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import ContentTaps from "./ContentTaps";

const { Navigator, Screen } = createBottomTabNavigator();

const MenuTabs = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme["color-primary-400"],
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 20,
          right: 20,
          height: 90,
          borderRadius: 15
        }
      }} >
      <Screen name="Map" component={Map} options={{
        tabBarLabel: 'Mapa',
        tabBarIcon: ({ color }) => {
          return (
            <TouchableWithoutFeedback
              style={{
                ...styles.BottomTabItem
              }}
            >
              <Icon name="map" size={30} color={color} />
              <Text style={{ color: color }}>Mapa</Text>
            </TouchableWithoutFeedback>
          )
        },

      }} />
      {/* <Screen name="Content" component={ContentTaps} options={{
        tabBarLabel: 'Contenido',
        tabBarIcon: ({ color }) => {
          return (
            <TouchableWithoutFeedback
              style={{
                ...styles.BottomTabItem
              }}
            >
              <Icon name="book" size={30} color={color} />
              <Text style={{ color: color }}>Contenido</Text>
            </TouchableWithoutFeedback>
          )
        }
      }} /> */}
      <Screen name="History" component={History} options={{
        tabBarLabel: 'Historial',
        tabBarIcon: ({ color }) => {
          return (
            <TouchableWithoutFeedback
              style={{
                ...styles.BottomTabItem
              }}
            >
              <Icon name="time" size={30} color={color} />
              <Text style={{ color: color }}>Historial</Text>
            </TouchableWithoutFeedback>
          )
        }
      }} />
      <Screen name="Contact" component={Contact} options={{
        tabBarLabel: 'Contacto',
        tabBarIcon: ({ color }) => {
          return (
            <TouchableWithoutFeedback
              style={{
                ...styles.BottomTabItem
              }}
            >
              <Icon name="chatbubbles" size={30} color={color} />
              <Text style={{ color: color }}>Contacto</Text>
            </TouchableWithoutFeedback>
          )
        }
      }} />
    </Navigator>
  )
}

const styles = StyleSheet.create({
  BottomTabItem: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MenuTabs;