import React from "react";
import { Text, View } from "react-native";
import FooterMenu from "../components/footerMenu";
import HomeButton from "../components/homeButton";
import theme from "../theme";

const Tips = () => {
    return (
        <View style={{
            justifyContent: theme.align.center,
            alignItems: theme.align.center
        }}>
            <Text>
                Estas en la vista de tips
            </Text>
            <HomeButton/>
            <FooterMenu/>
        </View>
    )
}

export default Tips;