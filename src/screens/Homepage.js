import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { WelcomeMessage } from "../components/WelcomeMessage";
import { StartRunButton } from "../components/StartRunButton";
// import { Button } from "react-native-ui-lib/src/components/button";


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

  async function saveActivity(
    // {totalHours, totalMinutes, totalSeconds}
    ) {
    console.log("hello")
    // Make API call to save activity
    // const response = await fetch('http://localhost:8000/users', {
    //     method: "POST",
    //     // body: {
    //     //     totalHours, 
    //     //     totalMinutes, 
    //     //     totalSeconds
    //     // }
    //   })
    //   .then(response => {
    //     console.log(response)
    //     response.json()
    // })
    //   .then(data => setUserData(data));

      const response = await fetch("http://localhost:8000/users");
      console.log("response", response)
      const movies = await response.json();
      console.log(movies);
    //navigation.navigate('Home');
  }

  console.log(userData);
  return (
    <View style={styles.container}>
      <WelcomeMessage />
      <Button title="Test"  onPress={saveActivity}/>
      {/* <StartRunButton navigation={navigation} /> */}
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
