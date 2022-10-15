import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function StartRunButton(params) {
  const [count, setCount] = useState(0);
  const message = 'Start Run';
  const addOne = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchArea} onPress={addOne}>
        <Text>{message + count}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchArea: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
  },
});
