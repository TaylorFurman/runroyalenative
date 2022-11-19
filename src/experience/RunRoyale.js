import React from 'react';
import {View, Text, LogBox, StyleSheet, TouchableOpacity} from 'react-native';
import {WelcomeMessage} from '../components/WelcomeMessage';
import {StartRunButton} from '../components/StartRunButton';

export function RunRoyale(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchArea}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Go Back Home</Text>
      </TouchableOpacity>
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
  touchArea: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
  },
});