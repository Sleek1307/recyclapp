import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableHighlight, TouchableOpacity, View } from "react-native";
import theme from "../../assets/themes/theme";

const HistoryCard = ({ data , navigation}) => {
  return (

    <TouchableOpacity
      style={{
        ...style.card
      }}
      onPress ={() => navigation.navigate('Service')}
    >
      <View>
        <Text>
          Origen: {'Julian Alveiro Mira'}
        </Text>
        <Text category={"label"} style={{ color: theme.colors.primary }}>
          XXXXXXXX
        </Text>

        <Text>
          Operario: {'John Doe'}
        </Text>
        <Text category={"label"} style={{ color: theme.colors.primary }}>
          XXXXXXXX
        </Text>

        <Text category={"label"} style={{ color: theme.colors.primary, textAlign: "right" }}>
          22/08/22-07:30
        </Text>
      </View>

    </TouchableOpacity>

  )
}

const style = StyleSheet.create({
  card: {
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  }
})

export default HistoryCard;