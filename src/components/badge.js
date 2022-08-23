import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-svg";
import theme from "../assets/themes/theme";

const Badge = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View >
        <TouchableOpacity>
          <Text category={"label"} style={{ backgroundColor: theme.colors.gray, borderRadius: 10, paddingHorizontal: 10, marginHorizontal: 5, fontSize: 15 }}>
            #Badge
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity>
          <Text category={"label"} style={{ backgroundColor: theme.colors.gray, borderRadius: 10, paddingHorizontal: 10, marginHorizontal: 5, fontSize: 15 }}>
            #Badge
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity>
          <Text category={"label"} style={{ backgroundColor: theme.colors.gray, borderRadius: 10, paddingHorizontal: 10, marginHorizontal: 5, fontSize: 15 }}>
            #Badge
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Badge;