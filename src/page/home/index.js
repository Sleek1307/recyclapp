import {connect} from 'react-redux';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Avatar from '../../components/cards/avatar';
import List from '../../components/list';
import theme from '../../assets/themes/theme';

const Home = props => {
  const roles = {
    1: 'Administrador',
    2: 'Moderador',
    3: 'Origen',
  };

  const user = props.response_login ? props.response_login.user : null;

  return (
    <View style={{...style.container}}>
      <View style={{...style.avatarContainer}}>
        <Avatar image={require('../../../img/JULIAN.png')} />
        <View style={{...style.avatarInfo}}>
          <Text
            style={{
              ...style.avatarTitle,
            }}>
            {user.name}
          </Text>
          <Text style={style.avatarSubtitle}>{user.email}</Text>
          <Text style={style.avatarSubtitle}>{roles[user.rol]}</Text>
        </View>
      </View>
      <View style={{...style.optionsContainer}}>
        <View style={{...style.options}}>
          <List navigate={props.navigation.navigate} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    flex: 0.5,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    flex: .5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  options: {
    position: 'absolute',
    backgroundColor: theme.colors.white,
    width: '75%',
    height: '75%',
    borderRadius: 20,
    top: '-10%',
    elevation: 5,
  },
  avatarInfo: {
    alignItems: 'center',
  },
  avatarTitle: {
    fontFamily: theme.fonts.baloo.semiBold,
    fontSize: theme.fontSizes.subTitle,
  },
  avatarSubtitle: {
    fontFamily: theme.fonts.baloo.regular,
    fontSize: theme.fontSizes.note,
  },
});

const mapStateToProps = state => {
  return {...state.authReducer};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
