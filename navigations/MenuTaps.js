import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { default as colors } from "./../src/assets/themes/custom-theme.json";
import Icon from 'react-native-vector-icons/Ionicons'

import Map from "../src/page/map";
import History from "../src/page/history";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import ContentTaps from "./ContentTaps";
import { theme } from "../src/assets/themes/theme";

const { Navigator, Screen } = createBottomTabNavigator();

const MenuTabs = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors["color-primary-400"],
        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: 20,
          height: 90,
          borderRadius: 15,
          alignItems: 'center',
          backfaceVisibility:'hidden'
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
      <Screen name="Content" component={ContentTaps} options={{
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
      }} />
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