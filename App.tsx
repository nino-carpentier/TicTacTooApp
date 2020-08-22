import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var t = [
  ['%','%','%'],
  ['%','%','%'],
  ['%','%','%']
]
function display(tab: string[][]) {
  var str = 
  tab[0][0] + '|' + tab[0][1] +'|' + tab[0][2] + '\n' +
  '-|-|-' + '\n' +
  tab[1][0] + '|' + tab[1][1] +'|' + tab[1][2] + '\n' +
  '-|-|-'  + '\n' +
  tab[2][0] + '|' + tab[2][1] +'|' + tab[2][2] + '\n'
  return str;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>TicTacToe!</Text>
      <Text>Xavier et Nino carpentier</Text>
      <Text>{display(t)}</Text>
      <StatusBar style="auto" />
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
