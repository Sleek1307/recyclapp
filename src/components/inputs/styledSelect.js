import React, { useEffect, useState } from "react";
import { IndexPath, Select, SelectItem } from '@ui-kitten/components';
import { StyleSheet } from "react-native";

import theme from "../../assets/themes/theme";

const StyledSelect = ({ width, setValue, value, data, children, placeholder, field }) => {

  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0))

  useEffect(() => {
    if (data.length > 0) {
      setValue(field, data[selectedIndex.row])
    }
  }, [selectedIndex])

  return (
    <Select
      size={"large"}
      selectedIndex={selectedIndex}
      onSelect={(value) => setSelectedIndex(value)}
      value={value.name}
      style={{
        width: width,
        ...styles.formControl,
      }}
      placeholder={placeholder}
    >
      {children}
    </Select>
  )
}

const styles = StyleSheet.create({
  formControl: {
    marginVertical: 5,
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: theme.colors.black,
    elevation: 2,
  },
  fontStyle: {
    color: '#000000',
    fontSize: 16
  }
})

export default StyledSelect;