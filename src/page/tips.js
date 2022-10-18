import React from "react";

import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import theme from "../assets/themes/theme";
import StepCard from "../components/cards/stepCard";

const Tips = (props) => {

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
      <ScrollView contentContainerStyle={{ ...style.scroll }} showsVerticalScrollIndicator={false}>
        <StepCard style={{ marginBottom: 15 }} data={data} navigation={props.navigation} />
        <StepCard style={{ marginBottom: 15 }} data={data} navigation={props.navigation} />
        <StepCard style={{ marginBottom: 0 }} data={data} navigation={props.navigation} />
      </ScrollView>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginBottom: "25%",
    marginHorizontal: 20,
    overflow: "hidden"
  },
  card: {
    borderRadius: 15,
  },
  postImg: {
    width: '100%',
    height: 250,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 20
  },
  more: {
    color: theme.colors.primary,
  },
  scroll: {
    borderRadius: 15,
  }
})

export default Tips;