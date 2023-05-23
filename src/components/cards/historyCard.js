import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableHighlight, TouchableOpacity, View } from "react-native";
import theme from "../../assets/themes/theme";

const HistoryCard = ({ data, action }) => {
  return (
    <TouchableOpacity
      style={{
        ...style.card,
        backgroundColor: data.recolector === null ? '#a9a9a9' : '#fafafa'
      }}
      onPress={action}
    >
      <View>
        <Text>
          Origen: {data.origin.name + ' ' + data.origin.lastName}
        </Text>
        <Text category={"label"} style={{ color: theme.colors.primary }}>
          {data.origin.id}
        </Text>

        <Text>
          Recolector: {data.recolector === null ? '': (data.recolector.name + ' ' + data.recolector.lastName)}
        </Text>
        <Text category={"label"} style={{ color: theme.colors.primary }}>
          {data.recolector === null ? 'Sin recolector asignado': (data.recolector.id)}
        </Text>

        <Text category={"label"} style={{ color: theme.colors.primary, textAlign: "right" }}>
          {new Date().toLocaleDateString(data.createdAt)}
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
  }
})

export default HistoryCard;