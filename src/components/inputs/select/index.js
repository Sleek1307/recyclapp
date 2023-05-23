import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../../assets/themes/theme';

const CustomSelect = ({name, label, onSelect, data}) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const selectValue = value => {
    setSelectedItem(value);
    toggleDropdown();
  };

  useEffect(() => {
    onSelect(name, selectedItem);
  }, [selectedItem]);

  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.dropdown}>
          {data.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => selectValue(item?.value)}
                style={{
                  alignItems: 'center',
                }}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
  };

  return (
    <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
      <Icon
        name="chevron-down"
        size={32}
        color={theme.colors.primary}
        style={{marginEnd: 5}}
      />
      <Text
        style={{
          fontSize: 18,
          fontFamily: theme.fonts.baloo.regular,
          color: selectedItem !== null ? theme.colors.black : '#acacac',
        }}>
        {selectedItem !== null ? selectedItem : label}
      </Text>
      {renderDropdown()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
    height: 50,
    width: '95%',
    marginBottom: 20,
    zIndex: 1,
  },
  dropdown: {
    position: 'absolute',
    marginTop: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 7,
    top: 50,
    width: '100%',
    borderRadius: 8,
  },
});

export default CustomSelect;
