import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import MenuTabs from './MenuTabsStack';
import Profile from '../src/page/profile';
import theme from '../src/assets/themes/theme';
import {fetch_signout} from '../redux/actions/auth.actions';
import {connect} from 'react-redux';

const {Navigator, Screen} = createDrawerNavigator();

const MainDrawer = props => {
  // useEffect(() => {
  //   if (props.response_login === null) {
  //     props.navigation.navigate('Signin')
  //   }
  // }, [props.response_login])

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: theme.colors.primary,
        headerTintColor: theme.colors.gray,
        headerShown: true,
        headerTransparent: true,
      }}>
      <Screen
        name="MenuTabs"
        component={MenuTabs}
        options={{
          drawerLabel: 'Inicio',
          headerTitle: '',
          headerRight: () => (
            <Icon
              name="home"
              onPress={() => props.fetch_signout(null)}
              style={{marginRight: 20}}
              size={30}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: 'Perfil',
          headerTitle: 'Perfil',
        }}
      />
    </Navigator>
  );
};

const mapStateToProps = state => {
  return {...state.authReducer};
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_signout: values => dispatch(fetch_signout(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDrawer);
