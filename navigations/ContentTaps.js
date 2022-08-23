import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Content from "../src/page/Content";
import Tips from "../src/page/Tips";

import { default as theme } from "./../src/assets/themes/custom-theme.json";

const { Navigator, Screen } = createMaterialTopTabNavigator()

const ContentTaps = () => {
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: theme["color-primary-600"],
                tabBarStyle: {
                    marginHorizontal: 20,
                    marginVertical: 20,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                },
                tabBarIndicatorStyle: {
                    backgroundColor: theme["color-primary-600"]
                }
            }}
        >
            <Screen name="Posts" component={Content} />
            {/* <Screen name="Tips" component={Tips} /> */}
        </Navigator>
    )
}

export default ContentTaps;