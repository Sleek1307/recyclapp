//React deppendencies
import React from 'react';
import NavigationContainer from '@react-navigation/native/lib/module/NavigationContainer';
import 'react-native-gesture-handler';

//External dependencies
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'react-native-elements';
//Custom components
import {default as theme} from './src/assets/themes/custom-theme.json';
import SignStack from './navigations/GlobalStack';
import store from './redux/store';
import {Provider} from 'react-redux';
import {style} from './src/assets/themes/style';

const customTheme = {
  Button: {
    buttonStyle: {
      ...style.button,
    },
    titleStyle: {
      ...style.titleButton,
    },
  },
  Card: {
    containerStyle: {
      ...style.card,
    },
  },
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <ThemeProvider theme={customTheme}>
            <NavigationContainer>
              <SignStack />
            </NavigationContainer>
          </ThemeProvider>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
