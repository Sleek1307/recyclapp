import React from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "@ui-kitten/components";

const style = StyleSheet.create({
  container: {
    marginLeft: 10,
    width: '100%',
    alignItems: 'flex-start'
  }

})

const Error = ({ error }) => {
  return (
    <View
      style={{
        ...style.container
      }}
    >
      <Text category={'label'} status={'danger'}>
        {error}
      </Text>
    </View>
  )
}

export default Error;