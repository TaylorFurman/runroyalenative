import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function WelcomeMessage(params) {
  const message = 'Welcome to Run Royale!';

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: 'blue',
    fontSize: 24,
  },
});
