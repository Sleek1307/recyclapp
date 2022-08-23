import React from "react";
import { Text, View } from "react-native";
import FooterMenu from "../components/footerMenu";
import HomeButton from "../components/homeButton";
import theme from "../assets/themes/theme";

const History = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: theme.align.center,
            alignItems: theme.align.center
        }}>
            <Text>
                Estas en el historial de aportes
            </Text>
        </View>
    )
}

export default History;