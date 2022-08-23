import React  from "react";
import { View, Text } from "react-native";
import { cos } from "react-native-reanimated";

const RestorePassword = () => {
    return (
        <View 
            style= {{
                flex: 1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <Text>Esta es la vista para restaurar contraseña</Text>
        </View>
    )
}

export default RestorePassword