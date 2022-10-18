import React, { useState, } from "react";


import { Image } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";

import theme from "../assets/themes/theme";

const Pager = ({ items }) => {

  const [selectIndex, setSlectIndex] = useState(0);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={require('./../../img/dummie.png')}
          style={{ ...style.postImg }}
        />
      </View>

    )
  }

  return (
    <Carousel
      layout="default"
      data={items}
      renderItem={renderItem}
    />

  )
}

const style = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: theme.colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '100%'
  },
  postImg: {
    width: 300,
    height: 250,
  },
  more: {
    color: theme.colors.primary,
  },
})

export default Pager