import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../src/page/login";
import Register from "../src/page/register";
import RestorePassword from "../src/page/RestorePassword";
import HomeDrawer from "./HomeDrawer";


const Stack = createNativeStackNavigator();

const SignStack = () => {
    return (
        <Stack.Navigator initialRouteName="Signin">
            <Stack.Screen name="Signin" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Restore" component={RestorePassword} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false, }} />
            <Stack.Screen name="Initial" component={HomeDrawer} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Resore" component={} */}
        </Stack.Navigator>
    )
}

export default SignStack;