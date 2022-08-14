import React from "react";
import { Text, View } from "react-native";
import FooterMenu from "../components/footerMenu";
import HomeButton from "../components/homeButton";
import theme from "../theme";

const History =  () => {
    return (
        <View style={{
            justifyContent: theme.align.center,
            alignItems: theme.align.center
        }}>
            <Text>
                Estas en el historial de aportes
            </Text>
            <HomeButton/>
            <FooterMenu/>
        </View>
    )
}

export default History;