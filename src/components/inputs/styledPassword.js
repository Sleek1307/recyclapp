import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Input } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";


const styles = StyleSheet.create({
  formControl: {
    width: '75%',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 15,
    elevation: 2
  },
  fontStyle: {
    color: '#000000',
    fontSize: 16
  }
})

const PassIcon = ({ showPass, action }) => {

  return (
    <TouchableWithoutFeedback
      style={{ marginEnd: 8, marginVertical: 0 }}
      onPress={() => { action(!showPass) }}
    >
      <Icon name={showPass === false ? 'eye-off' : 'eye'} size={24} />
    </TouchableWithoutFeedback>)
}

const StyledPassword = ({ title }) => {

  const [showPass, setShowPass] = useState(false)

  return <Input
    secureTextEntry={!showPass}
    style={{ ...styles.formControl }}
    textStyle={{ ...styles.fontStyle }}
    placeholder={title}
    size='large'
    accessoryRight={<PassIcon showPass={showPass} action={setShowPass} />}
  />
}

export default StyledPassword