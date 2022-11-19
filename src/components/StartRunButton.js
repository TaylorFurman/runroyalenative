import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function StartRunButton(props) {
  const { navigation } = props;
  const message = "Start Run";
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchArea}
        onPress={() => navigation.navigate("RunRoyale")}
      >
        <Text>{message}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  touchArea: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
  },
});
