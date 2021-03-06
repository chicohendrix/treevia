// Treevia Application on React Native by Ritvik Kumar K 
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Brewery from './treevia'
import Treevia from './treevia'


export default function App() {
  return (
    <View style={styles.container}>
      <Treevia/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
