import React from "react";;
import { createNativeStackNavigator } from "@react-navigation/native-stack";;

import Map from "../src/page/map";
import Profile from "../src/page/profile";

const Stack = createNativeStackNavigator();

const DrawerStack = () => {
    return (
        <Stack.Navigator 
        >
            <Stack.Screen name="Home" component={Map}/>
            <Stack.Screen name="Mis datos" component={Profile}/>
        </Stack.Navigator>
    )
}

export default DrawerStack;