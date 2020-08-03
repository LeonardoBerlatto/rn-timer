import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Timer } from './components';

import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <View style={styles.container}>
      <Timer time={100}/>
      <View style={styles.test}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00001f',
    justifyContent: 'space-between'
  },
  test: {
    borderWidth: 2,
    width: '100%',
    flex: 1,
    borderColor: 'red'
  }
});

registerRootComponent(App)