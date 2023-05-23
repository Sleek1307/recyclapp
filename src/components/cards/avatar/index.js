import React from "react";
import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    avatarStyle:{
        height: 150,
        width: 150,
        borderRadius: 75,
        backgroundColor: '#fafafa',
        justifyContent:'center',
        alignItems:'center',
        overflow:"hidden"
    }
})

const Avatar = ({image}) => {
    return (
        <View
            style= {{
                ...styles.avatarStyle
            }}
        >
            <Image 
            style={{
                width:'100%',
                height:'100%'
            }}
            source={image}/>
        </View>
    )
}

export default Avatar