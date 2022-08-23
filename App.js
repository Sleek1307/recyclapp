//React deppendencies
import React from 'react';
import NavigationContainer from "@react-navigation/native/lib/module/NavigationContainer"
import 'react-native-gesture-handler';

//External dependencies
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

//Custom components
import styles from './src/styles/styles';
import { default as theme } from './src/assets/themes/custom-theme.json'
import SignStack from './navigations/SignStack';

const App = () => {
  return (
    <>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <NavigationContainer>
          <SignStack />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  )
}


export default App;
