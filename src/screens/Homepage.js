import React from "react";
import { View, StyleSheet } from "react-native";
import { WelcomeMessage } from "../components/WelcomeMessage";
import { StartRunButton } from "../components/StartRunButton";


export function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <WelcomeMessage />
      <StartRunButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "powderblue",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
});
