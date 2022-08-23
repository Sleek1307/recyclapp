import React from "react";
import { Card, Text, ViewPager } from "@ui-kitten/components";

import { ScrollView, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import theme from "../assets/themes/theme";
import Pager from "../components/pager";

const Tips = () => {

  return (
    <View style={{ ...style.container }}>

      <Pager items={[1,2,3]}/>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    borderRadius: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "25%",
  }
})

export default Tips;