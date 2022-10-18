import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import theme from "../assets/themes/theme";
import { CardPost } from "../components/card";

const Content = (props) => {

  const data = [
    {
      title: 'Titulo',
      body: 'minim non enim anim in do ut nulla cillum tempor culpa eiusmod aute esse eu incididunt consectetur eu et anim enim voluptate pariatur magna dolor',
      footer: 'FOOTER',
      img: require('./../../img/dummie.png')
    },
    {
      title: 'Step 1',
      body: 'minim non enim anim in do ut nulla cillum tempor culpa eiusmod aute esse eu incididunt consectetur eu et anim enim voluptate pariatur magna dolor',
      footer: 'FOOTER',
      img: require('./../../img/dummie.png')
    },
    {
      title: 'Step 2',
      body: 'minim non enim anim in do ut nulla cillum tempor culpa eiusmod aute esse eu incididunt consectetur eu et anim enim voluptate pariatur magna dolor',
      footer: 'FOOTER',
      img: require('./../../img/dummie.png')
    }
  ]

  return (
    <View style={{
      marginBottom: 120,
      marginHorizontal: 20,
      borderRadius: 15,
      overflow: "hidden"
    }}>
      <ScrollView contentContainerStyle={{
        ...style.scroll,
      }}
        showsVerticalScrollIndicator={false}
      >
        {
          data.map((item, index) => {

            return (
              <CardPost
                key={index}
                data={item}
                navigate={props.navigation.navigate}
                style={{
                  marginBottom: (index === (data.length - 1) ? 0 : 15)
                }}
              />)
          })
        }

      </ScrollView >
    </View >
  )
}

const style = StyleSheet.create({
  scroll: {
    justifyContent: theme.align.end,
    borderRadius: 15,
  }
})

export default Content;