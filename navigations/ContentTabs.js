import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Content from '../src/page/content';
import Tips from '../src/page/tips';

import {default as theme} from '../src/assets/themes/custom-theme.json';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const ContentTabs = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          marginHorizontal: 20,
          marginTop: 60,
          marginBottom: 20,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}
    >
      <Screen name="Posts" component={Content} />
      <Screen name="Tutoriales" component={Tips} />
    </Navigator>
  );
};

export default ContentTabs;
