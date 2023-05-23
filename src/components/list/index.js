import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../assets/themes/theme';

const style = StyleSheet.create({
  listItem: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: theme.colors.graySmoke,
    borderBottomWidth: 1,
  },
  listItemText: {
    fontSize: theme.fontSizes.subTitle,
    fontFamily: theme.fonts.baloo.regular,
    marginLeft: 10,
  },
  listItemContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

const renderItem = ({item}) => {
  return (
    <TouchableOpacity onPress={() => item.navigate(item.path)}>
      <View style={{...style.listItem}}>
        <View style={{...style.listItemContent}}>
          <Icon name={item.icon} size={32} />
          <Text style={{...style.listItemText}}>{item.title}</Text>
        </View>
        <Icon name="chevron-right" size={32} />
      </View>
    </TouchableOpacity>
  );
};

const List = ({navigate}) => {
  const OPTIONS = [
    {
      title: 'Ver estadisticas',
      icon: 'trending-up',
      id: 1,
      navigate,
      path: 'Stats'
    },
    {
      title: 'Solicitar recogida',
      icon: 'plus',
      id: 2,
      navigate,
      path: 'CreateService'
    }
  ];

  return (
    <FlatList
      data={OPTIONS}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default List;
