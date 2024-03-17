import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { WelcomeMessage } from "../components/WelcomeMessage";
import { StartRunButton } from "../components/StartRunButton";


export function Homepage({ navigation }) {
const [userData, setUserData] = useState(null);

  useEffect(()=>{
      // API request to get runnerInfo
      fetch('https://swapi.dev/api/people/1/', {
        method: "GET"
      })
      .then(response => response.json())
      .then(data => setUserData(data));
  }, [])

  console.log(userData);
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
