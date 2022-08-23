import React from "react";
import { Text, View } from "react-native";
import FooterMenu from "../components/footerMenu";
import HomeButton from "../components/homeButton";
import theme from "../assets/themes/theme";

const Contact = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: theme.align.center,
            alignItems: theme.align.center
        }}>
            <Text>
                Estas en la vista de contacto
            </Text>
        </View>
    )
}

export default Contact;