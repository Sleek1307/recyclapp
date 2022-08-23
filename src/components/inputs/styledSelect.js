import React, { useState } from "react";

import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import { StyleSheet } from "react-native";

import theme from "../../assets/themes/theme";

const StyledSelect = ({ width, data, }) => {

  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0))

  return (

    <Select
      size={"large"}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      value={data[selectedIndex - 1]}
      style={{
        width: width,
        ...styles.formControl,
      }}
    >
      {data.map((item, index) => {
        return <SelectItem title={item} key={index} />
      })}
    </Select>
  )
}

const styles = StyleSheet.create({
  formControl: {
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.black,
    elevation: 2
  },
  fontStyle: {
    color: '#000000',
    fontSize: 16
  }
})

export default StyledSelect;