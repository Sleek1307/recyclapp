import { Card, Text } from "@ui-kitten/components";
import React from "react";
import { Image, ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity, View } from "react-native";

import theme from "../assets/themes/theme";
import Badge from "../components/badge";

const Content = () => {
  return (
    <View style={{
      marginBottom: '25%',
      marginHorizontal: 20,
      borderRadius: 15,
      overflow: "hidden"
    }}>
      <ScrollView contentContainerStyle={{
        ...style.scroll
      }}>
        <Card
          header={<Text category={"h6"}>Titulo</Text>}
          style={{ ...style.card, marginBottom: 15 }}
        >
          <Image
            source={require('./../../img/dummie.png')}
            style={{ ...style.postImg }}
          />
          <Text>in nisi pariatur consectetur proident est occaecat velit amet do laboris mollit fugiat eu ipsum anim laborum ut ullamco tempor amet pariatur in tempor nisi...</Text>
          <TouchableHighlight><Text style={{ ...style.more }} t>Ver mas</Text></TouchableHighlight>

        </Card >

        <Card
          header={<Text category={"h6"}>Titulo</Text>}
          footer={<Text status={"basic"}>Este es el footer</Text>}
          style={{ ...style.card, marginBottom: 0 }}
        >
          <Image
            source={require('./../../img/dummie.png')}
            style={{ ...style.postImg }}
          />
          <Text>in nisi pariatur consectetur proident est occaecat velit amet do laboris mollit fugiat eu ipsum anim laborum ut ullamco tempor amet pariatur in tempor nisi...</Text>
          <TouchableHighlight><Text style={{ ...style.more }} t>Ver mas</Text></TouchableHighlight>
        </Card>
      </ScrollView >
    </View >
  )
}

const style = StyleSheet.create({
  card: {
    borderRadius: 15,
  },
  postImg: {
    width: '100%',
    height: 250,
  },
  more: {
    color: theme.colors.primary,
  },
  scroll: {
    justifyContent: theme.align.end,
    borderRadius: 15,
  }
})

export default Content;