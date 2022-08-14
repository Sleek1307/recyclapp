/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './src/page/login';
import Register from './src/page/register';
import Home from './src/page/home';
import Tips from './src/page/tips';
import styles from './src/styles/styles';
import { View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import Map from './src/page/map';
import Contact from './src/page/contact';
import History from './src/page/history';

const App = () => {
  return (<>
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/map' element={<Map />} />
          <Route path='/tips' element={<Tips />} />
          <Route path='/history' element={<History />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </View>
    </NativeRouter>
  </>
  )
}


export default App;
