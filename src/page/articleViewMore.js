import React from "react";
import { StyleSheet, ScrollView, ImageBackground, View, Image } from "react-native";
import { Text } from "@ui-kitten/components";

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

const ArticleViewMore = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={data[0].img}
        style={style.headerImage}
      ></ImageBackground>
      <View
        style={{
          ...style.container
        }}
      >
        <View
          style={style.textContainer}
        >
          <Text
            category={"h1"}
          >
            {data[0].title}
          </Text>
          <Text>
            {data[0].body}
            {data[0].body}
            {data[0].body}
            {data[0].body}
            {data[0].body}
            {data[0].body}
            {data[0].body}
          </Text>
        </View>
        {(data.length > 1) &&
          <View>
            <View
              style={style.textContainer}
            >

              <Text category={"h3"}>
                {data[1].title}
              </Text>
              <Image source={data[2].img} style={{
                ...style.headerImage
              }} />
              <Text>
                {data[0].body}
                {data[0].body}
                {data[0].body}
                {data[0].body}
                {data[0].body}
                {data[0].body}
                {data[0].body}
              </Text>
            </View>
            <View
              style={style.textContainer}
            >
              <Text category={"h3"}>
                {data[2].title}
              </Text>

              <Image source={data[2].img} style={{
                ...style.headerImage
              }} />

              <Text>
                {data[0].body}
                {data[0].body}
                {data[0].body}
                {data[0].body}
                {data[0].body}
                {data[0].body}
                {data[0].body}
              </Text>
            </View>
          </View>
        }
      </View>

    </ScrollView>)
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  headerImage: {
    width: "100%",
    height: 350,
  },
  textContainer: {
    marginHorizontal: 20
  }
})

export default ArticleViewMore