import React from 'react';
import {View, Text, LogBox, StyleSheet} from 'react-native';
import {WelcomeMessage} from '../components/WelcomeMessage';
import {StartRunButton} from '../components/StartRunButton';

export function RunRoyale(params) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});