import React from "react";
import { ImageBackground, TouchableWithoutFeedback, View, TouchableHighlight, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { Card, Text } from "@ui-kitten/components";
import theme from '../assets/themes/theme';

const CardPost = ({ data, ShowPagers, nextAction, prevtAction, navigate, style }) => {
  return (
    <Card
      header={<Text category={"h4"}>{data?.title}</Text>}
      footer={<Text category={"h4"}>{data?.footer}</Text>}
      style={{ ...styles.card, ...style }}
    >
      <ImageBackground
        source={data?.img}
        style={{ ...styles.postImg}}
      >
        {ShowPagers != undefined &&
          <View style={{ ...styles.btnContainer }}>
            <TouchableWithoutFeedback
              onPress={prevtAction}
            >
              <Icon name="caret-back-circle-outline" size={35} color={'#fafafa'} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={nextAction}
            >
              <Icon name="caret-forward-circle-outline" size={35} color={'#fafafa'} />
            </TouchableWithoutFeedback>
          </View>
        }

      </ImageBackground>
      <Text>{data.body}</Text>
      <TouchableWithoutFeedback
        onPress={() => navigate('Article')}
      >
        <Text style={{ ...styles.more }} >Ver mas...</Text>
      </TouchableWithoutFeedback>

    </Card >
  );
};

const styles = StyleSheet.create({
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
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 20
  }
})

export { CardPost };
