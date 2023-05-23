import React from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer